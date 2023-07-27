import { HTTP_STATUS } from "@lib/constants";
import { signUpSchema } from "@lib/yup/schemas";
import * as yup from 'yup';

type SignUpFormData = yup.InferType<typeof signUpSchema>;

export async function POST(req: Request) {
    let signUpFormData: SignUpFormData;

    try {
        signUpFormData = await signUpSchema.validate(await req.json());

        console.log(signUpFormData);
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