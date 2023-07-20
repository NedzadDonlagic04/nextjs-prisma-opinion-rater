import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import PasswordInputField from "@components/form/PasswordInputField";
import RHForm from "@components/form/RHForm";

export default function SignUp() {
    return (
        <>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>Sign Up</Typography>
            <RHForm type="signup" />
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