import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";
import {SelectInputProps} from "@mui/material/Select/SelectInput";

export function Dropdown({label, currentValue, options, onChange}: Props) {
    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <Select
                value={currentValue}
                label={label}
                onChange={(event) => onChange(event.target.value)}
            >
                {options.map(({label, value}) => <MenuItem value={value}>{label}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

interface Props {
    label: string;
    currentValue: Value,
    options: { value: Value, label: string }[];
    onChange: (value: Value) => void;
}

type Value = string | readonly string[] | number | undefined;