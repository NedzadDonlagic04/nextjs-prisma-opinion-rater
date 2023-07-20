import TextField from "@mui/material/TextField";
import PasswordInputField from "./PasswordInputField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export interface LoginFormInterface {
    username: string,
    password: string
}

export default function LoginFormComponents() {
    return (
        <Stack sx={{ gap: 3 }}>
            <TextField required label="Username" name="username" />
            <PasswordInputField label="Password" name="password" />
            <Button variant="contained" type="submit">
                Login
            </Button>
        </Stack>
    );
}