import { loginSchema } from "@yup/schemas";
import * as yup from "yup";
import prisma from "@lib/prisma";
import { User } from "@prisma/client";
import { RESPONSES } from "@lib/constants";

type LoginFormData = yup.InferType<typeof loginSchema>;

export async function POST(req: Request) {
    const { SUCCESS, USERNAME_DOESNT_EXIST, PASSWORD_DOESNT_MATCH, VALIDATION_ERROR } = RESPONSES;

    let loginFormData: LoginFormData;

    try {
        loginFormData = await loginSchema.validate(await req.json());
    } catch (err) {
        if (err instanceof yup.ValidationError)
            console.error(`Error message: ${err.message}`);

        return new Response(VALIDATION_ERROR.getMessage(), {
            status: VALIDATION_ERROR.getStatus(),
        });
    }

    const user = await prisma.user.findUnique({
        where: {
            user_name: loginFormData.username,
        }
    });

    if (user === null) {
        return new Response(USERNAME_DOESNT_EXIST.getMessage(), {
            status: USERNAME_DOESNT_EXIST.getStatus(),
        });
    } else if (user.password !== loginFormData.password) {
        return new Response(PASSWORD_DOESNT_MATCH.getMessage(), {
            status: PASSWORD_DOESNT_MATCH.getStatus(),
        });
    }

    return new Response(SUCCESS.getMessage(), {
        status: SUCCESS.getStatus(),
    });
}
