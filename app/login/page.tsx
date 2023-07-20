import RHForm from "@components/form/RHForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Login() {
    return (
        <>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>Login</Typography>
            <RHForm type="login"/>
            <Box 
                display="flex" 
                justifyContent="flex-end" 
                sx={{ width: 1 }}>
                <Link
                    style={{ fontSize: ".9rem", color: "royalblue", textAlign: 'center' }}
                    href="/signup">
                    Don&apos;t have an account? Sign Up
                </Link>
            </Box>
        </>
    );
}