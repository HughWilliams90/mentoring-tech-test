import React from "react";
import {Box, Divider, Typography} from "@mui/material";
import {Dropdown} from "../../components/Dropdown";
import {Input} from "../../components/Input";
import {BMICalculator} from "../../components/bmi-calculator/BMICalculator";
import {Sex, useHealth} from "../../stores/health.store";
import {CalorieCalculator} from "../../components/calorie-calculator/CalorieCalculator";

export const Calculations = () => {
    const {
        age,
        setAge,
        sex,
        setSex,
        height,
        setHeight,
        weight,
        setWeight,
    } = useHealth(state => state)
    return (
        <Box>
            <Typography variant={"h3"}>Health calculations</Typography>
            <Box sx={{mt: 2, mb: 2, display: 'flex'}}>
                <Dropdown
                    label={'Sex'}
                    currentValue={sex}
                    options={[{label: 'Male', value: 'Male'}, {label: 'Female', value: 'female'}]}
                    onChange={(value: Sex) => setSex(value)}
                />
                <Input label={'Age'} value={age} onChange={(value) => setAge(+value)} />
                <Input label={'Weight'} value={weight} onChange={(value) => setWeight(+value)} />
                <Input label={'Height'} value={height} onChange={(value) => setHeight(+value)} />
            </Box>
            <BMICalculator/>
            <Divider sx={{mb: 2}}/>
            <CalorieCalculator/>
        </Box>
    )
}