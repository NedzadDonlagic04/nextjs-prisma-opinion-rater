import { object, string, ref } from 'yup';

export const loginSchema = object({
    username: string().min(3).max(20).required("Username must be between 3 and 20 characters"),
    password: string().min(8).max(25).required("Password must be between 8 and 25 characters")
});

export const signUpSchema = loginSchema.shape({
    email: string().email().required(),
    confirmPassword: string().oneOf([ref('password')], "Passwords do not match!").required()
});