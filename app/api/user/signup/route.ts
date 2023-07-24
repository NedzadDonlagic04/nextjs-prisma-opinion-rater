import { signUpSchema } from "@lib/yup/schemas";
import * as yup from 'yup';

type SignUpFormData = yup.InferType<typeof signUpSchema>;

export async function POST(req: Request) {
    let signUpFormData: SignUpFormData;

    try {
        signUpFormData = await signUpSchema.validate(await req.json());

        console.log(signUpFormData);
    } catch(err) {
        if(err instanceof yup.ValidationError) console.error(`Error message: ${err.message}`);
        else console.error(`Error: ${err}`);
        
        return new Response("Validation error", {
            status: 400
        });
    } 

    return new Response('User created', {
        status: 200
    });
}