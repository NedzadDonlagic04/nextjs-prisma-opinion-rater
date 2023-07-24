"use client";

import { ReactNode, forwardRef, useState } from "react";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface PropTypes {
    label: string,
    error: boolean | undefined
    helperText: ReactNode
}

const PassWordInputField = forwardRef(function PasswordInputField({ label, error, helperText, ...rest }: PropTypes, ref) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <TextField
            required
            label={label}
            inputRef={ref}
            error={error}
            helperText={helperText}
            {...rest}
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onPointerDown={() =>
                                setShowPassword((state) => !state)
                            }
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
});

export default PassWordInputField; 