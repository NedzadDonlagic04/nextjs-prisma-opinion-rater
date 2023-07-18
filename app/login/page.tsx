import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Login() {
    return (
        <>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>Login</Typography>
            <form style={{ width: "100%", maxWidth: '450px' }}>
                <Box 
                    display='flex'
                    flexDirection='column'
                    sx={{ gap: 3 }}>
                    <TextField required label="Username" />
                    <TextField
                        required
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <Button
                        variant="contained">
                        Login
                    </Button>
                </Box>
            </form>
            <Box display="flex" justifyContent="flex-end" sx={{ width: 1 }}>
                <Link
                    style={{ fontSize: ".9rem", color: "royalblue", textAlign: 'center' }}
                    href="/signup"
                >
                    Don&apos;t have an account? Sign Up
                </Link>
            </Box>
        </>
    );
}