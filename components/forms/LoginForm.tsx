"use client";

import { SyntheticEvent, useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import PasswordInputField from "./PasswordInputField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@yup/schemas";
import * as yup from "yup";
import { DID_USER_GET_CREATED } from "@lib/constants";

type LoginFormType = yup.InferType<typeof loginSchema>;

export default function LoginFormComponents() {
    const [snackbarOpen, snackbarOpenSetter] = useState(false);

    const snackbarHandleClose = (
        event?: SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }
        snackbarOpenSetter(false);
    };

    useEffect(() => {
        const item = localStorage.getItem(DID_USER_GET_CREATED.KEY);

        if (item) {
            snackbarOpenSetter(true);
            localStorage.removeItem(DID_USER_GET_CREATED.KEY);
        }
    }, []);

    const { register, handleSubmit, control, formState } =
        useForm<LoginFormType>({
            resolver: yupResolver(loginSchema),
        });
    const { errors } = formState;

    const onSubmit = (data: LoginFormType) => {
        fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify(data),
        }) /* .then(res => console.log(res)) */;
        // ^ Useful for debugging
    };

    return (
        <>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={snackbarHandleClose}
            >
                <Alert
                    onClose={snackbarHandleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Account created! Please login now!
                </Alert>
            </Snackbar>

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

                    <Button variant="contained" type="submit">
                        Login
                    </Button>
                </Stack>
            </form>
        </>
    );
}
