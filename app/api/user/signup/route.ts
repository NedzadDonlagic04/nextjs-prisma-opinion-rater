import { HTTP_STATUS } from "@lib/constants";
import { signUpSchema } from "@lib/yup/schemas";
import * as yup from 'yup';
import prisma from "@lib/prisma";

type SignUpFormData = yup.InferType<typeof signUpSchema>;

export async function POST(req: Request) {
    let signUpFormData: SignUpFormData;

    try {
        signUpFormData = await signUpSchema.validate(await req.json());

        await prisma.user.create({
            data: {
                user_name: signUpFormData.username,
                user_email: signUpFormData.email,
                password: signUpFormData.password,        
            }
        });
    } catch(err) {
        if(err instanceof yup.ValidationError) {
            console.error(`Error message: ${err.message}`);

            return new Response(null, {
                status: HTTP_STATUS.VALIDATION_ERROR,
            });
        } else {
            console.error(`Error: ${err}`);

            return new Response(null, {
                status: HTTP_STATUS.USERNAME_ALREADY_EXISTS
            });
        }
    } 

    return new Response(null, {
        status: HTTP_STATUS.SUCCESS
    });
}