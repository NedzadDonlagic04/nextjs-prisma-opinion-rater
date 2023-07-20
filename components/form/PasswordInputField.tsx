"use client"

import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';   

interface PropTypes {
    label: string,
    name: string,
    register?: any
}

export default function PasswordInputField({ label, name, register } : PropTypes) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <TextField
            required
            label={label}
            name={name}
            type={ showPassword? "text" : "password" }
            autoComplete="current-password"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onPointerDown={ () => setShowPassword(state => !state) }
                        >
                            { showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
}