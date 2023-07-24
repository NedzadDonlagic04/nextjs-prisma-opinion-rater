
import { loginSchema } from "@lib/yup/schemas";
import * as yup from 'yup';

type LoginFormData = yup.InferType<typeof loginSchema>;

export async function POST(req: Request) {
    let loginFormData: LoginFormData;

    try {
        loginFormData = await loginSchema.validate(await req.json());

        console.log(loginFormData);
    } catch(err) {
        if(err instanceof yup.ValidationError) console.error(`Error message: ${err.message}`);
        else console.error(`Error: ${err}`);
        
        return new Response("Validation error", {
            status: 400
        });
    } 

    return new Response('User logged in', {
        status: 200
    });
}