"use client";

import { useRouter } from "next/navigation";

import TextField from "@mui/material/TextField";
import PasswordInputField from "./PasswordInputField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Controller, useForm } from "react-hook-form";
import { signUpSchema } from "@yup/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { HTTP_STATUS, DID_USER_GET_CREATED } from "@lib/constants";

type SignUpFormType = yup.InferType<typeof signUpSchema>;

export default function SignUpForm() {
    const router = useRouter();

    const { register, handleSubmit, control, formState, setError } =
        useForm<SignUpFormType>({
            resolver: yupResolver(signUpSchema),
        });
    const { errors } = formState;

    const onSubmit = (data: SignUpFormType) => {
        fetch("/api/user/signup", {
            method: "POST",
            body: JSON.stringify(data),
        }).then(res => {
            if (res.status === HTTP_STATUS.SUCCESS) {
                localStorage.setItem(
                    DID_USER_GET_CREATED.KEY,
                    DID_USER_GET_CREATED.VALUE
                );
                router.push("/login");
            } else if (res.status === HTTP_STATUS.USERNAME_ALREADY_EXISTS) {
                setError("username", {
                    type: "custom",
                    message: "Username already exists!",
                });
            }
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "100%", maxWidth: "450px" }}
        >
            <Stack sx={{ gap: 3 }}>
                <TextField
                    required
                    label="Username"
                    {...register("username")}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                />

                <TextField
                    required
                    label="Email"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
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
                            helperText={errors.password?.message}
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
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword?.message}
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
