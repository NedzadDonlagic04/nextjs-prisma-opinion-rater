"use client"

import TextField from "@mui/material/TextField";
import PasswordInputField from "./PasswordInputField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Controller, useForm } from "react-hook-form";
import { LoginFormInterface } from "./LoginForm";

export interface SignUpFormInterface extends LoginFormInterface {
    email: string;
    confirmPassword: string;
}

export default function SignUpForm() {
    const { register, handleSubmit, control } = useForm<SignUpFormInterface>();

    const onSubmit = (data: SignUpFormInterface) => {
        console.log(data);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "100%", maxWidth: "450px" }}>
            <Stack sx={{ gap: 3 }}>
                <TextField
                    required
                    label="Username"
                    {...register("username")}
                />
                <TextField required label="Email" {...register("email")} />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <PasswordInputField
                            label="Password"
                            {...field}
                            ref={field.ref}
                        />
                    )}
                />
                <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <PasswordInputField
                            label="Confirm Password"
                            {...field}
                            ref={field.ref}
                        />
                    )}
                />
                <Button variant="contained" type="submit">
                    Sign Up
                </Button>
            </Stack>
        </form>
    );
}
