import {Box, Typography} from "@mui/material";
import React, {useMemo} from "react";
import {useHealth} from "../../stores/health.store";
import {CalorieCalculatorUtil} from "./calorie-calculator.util";

export const CalorieCalculator = () => {
    const {
        sex,
        weight,
        height,
        age,
    } = useHealth((state) => state);

    const result = useMemo(() => CalorieCalculatorUtil.calculate(weight, height, age, sex), [weight, height, age, sex])

    return (
        <Box>
            <Typography variant={"h5"}>Calorie intake</Typography>
            <Typography>Your required daily calories are {result || 0}</Typography>
        </Box>
    );
}