import SignUpForm from "@components/forms/SignUpForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Link from "next/link";

export default function SignUp() {
    return (
        <>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>Sign Up</Typography>

            <SignUpForm />
            
            <Box display="flex" justifyContent="flex-end" sx={{ width: 1 }}>
                <Link
                    style={{ fontSize: ".9rem", color: "royalblue", textAlign: 'center' }}
                    href="/login"
                >
                    Have an account? Login
                </Link>
            </Box>
        </>
    );
}