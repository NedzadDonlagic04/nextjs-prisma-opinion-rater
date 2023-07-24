import { object, string, ref } from 'yup';

export const loginSchema = object({
    username: string()
            .min(3, "Username must be at least 3 characters long")
            .max(20, "Username must be shorter than 20 characters")
            .required(),
    password: string()
            .min(8, "Password must be at least 8 characters long")
            .max(25, "Password must be shorter than 25 characters")
            .required()
});

export const signUpSchema = loginSchema.shape({
    email: string().email().required(),
    confirmPassword: string().oneOf([ref('password')], "Passwords do not match!").required()
});