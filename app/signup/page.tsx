import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import PasswordInputField from "@components/PasswordInputField";

export default function SignUp() {
    return (
        <>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>Sign Up</Typography>
            <form style={{ width: "100%", maxWidth: '450px' }}>
                <Box 
                    display='flex'
                    flexDirection='column'
                    sx={{ gap: 3 }}>
                    <TextField required label="Username" name="username"/>
                    <TextField required label="Email" name="email"/>
                    <PasswordInputField label="Password" name="password" />
                    <PasswordInputField label="Confirm Password" name="confirm-password" />
                    <Button
                        variant="contained">
                        Sign Up
                    </Button>
                </Box>
            </form>
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