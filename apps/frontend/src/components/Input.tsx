import {TextField} from "@mui/material";
import React from "react";

export const Input = ({label, value, onChange}: Props) => {
    return (
        <TextField label={label} value={(value ?? '').toString()} onChange={event => onChange(event.target.value)}/>
    )
}

interface Props {
    label: string;
    value: string | number;
    onChange: (value: string) => void;
}