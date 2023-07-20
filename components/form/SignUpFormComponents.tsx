import TextField from "@mui/material/TextField";
import PasswordInputField from "./PasswordInputField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function SignUpFormComponents() {
    return (
        <Stack sx={{ gap: 3 }}>
            <TextField required label="Username" name="username" />
            <TextField required label="Email" name="email" />
            <PasswordInputField label="Password" name="password" />
            <PasswordInputField
                label="Confirm Password"
                name="confirm-password"
            />
            <Button variant="contained" type="submit">
                Sign Up
            </Button>
        </Stack>
    );
}