import { RESPONSES } from "@lib/constants";
import { signUpSchema } from "@yup/schemas";
import * as yup from "yup";
import prisma from "@lib/prisma";

type SignUpFormData = yup.InferType<typeof signUpSchema>;

export async function POST(req: Request) {
    const { SUCCESS, VALIDATION_ERROR, USERNAME_ALREADY_EXISTS } = RESPONSES;

    let signUpFormData: SignUpFormData;

    try {
        signUpFormData = await signUpSchema.validate(await req.json());

        await prisma.user.create({
            data: {
                user_name: signUpFormData.username,
                user_email: signUpFormData.email,
                password: signUpFormData.password,
            },
        });
    } catch (err) {
        if (err instanceof yup.ValidationError) {
            console.error(`Error message: ${err.message}`);

            return new Response(VALIDATION_ERROR.getMessage(), {
                status: VALIDATION_ERROR.getStatus(),
            });
        } else {
            console.error(`Error: ${err}`);

            return new Response(USERNAME_ALREADY_EXISTS.getMessage(), {
                status: USERNAME_ALREADY_EXISTS.getStatus(),
            });        
        }   
    }

    return new Response(SUCCESS.getMessage(), {
        status: SUCCESS.getStatus(),
    });
}
