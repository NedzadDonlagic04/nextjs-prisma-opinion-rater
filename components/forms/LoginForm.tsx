"use client"

import TextField from "@mui/material/TextField";
import PasswordInputField from "./PasswordInputField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from "@lib/yup/schemas";

export interface LoginFormInterface {
    username: string,
    password: string,
}

export default function LoginFormComponents() {
    const { register, handleSubmit, control, formState } = useForm<LoginFormInterface>({
        resolver: yupResolver(loginSchema),
    });
    const { errors } = formState;

    const onSubmit = (data: LoginFormInterface) => {
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
                    error={!!errors.username}
                    helperText={errors.username?.message}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <PasswordInputField 
                            label="Password" 
                            {...field} 
                            ref={field.ref} 
                            error={!!errors.password}
                            helperText={errors.password?.message} />
                    )}
                />
                <Button variant="contained" type="submit">
                    Login
                </Button>
            </Stack>
        </form>
    );
}