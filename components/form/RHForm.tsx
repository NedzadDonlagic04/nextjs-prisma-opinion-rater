"use client";

import LoginFormComponents from "./LoginFormComponents";
import SignUpFormComponents from './SignUpFormComponents';

import { LoginFormInterface } from "./LoginFormComponents";
import { useForm } from "react-hook-form";

interface PropTypes {
    type: "login" | "signup"
}

// Name is supposed to be React Hook Form
// RHF sounded like a KFC ripoff so I went with RHForm
export default function RHForm({ type }: PropTypes) {
    const { register, handleSubmit } = useForm<LoginFormInterface>();

    const onSubmit = (data: LoginFormInterface) => {
        console.log(data);
    }

    return (
        <form 
            style={{ width: "100%", maxWidth: "450px" }}
            onSubmit={handleSubmit(onSubmit)}>
            { 
                type === "login" ?
                    ( <LoginFormComponents /> )
                :   ( <SignUpFormComponents /> )
            } 
        </form>
    );
}