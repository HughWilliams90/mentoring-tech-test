import {Box, Typography} from "@mui/material";
import React from "react";

export const BMICalculator = () => {
    return (
        <Box sx={{mb: 2}}>
            <Typography sx={{mb: 1}} variant={"h5"}>Body mass index</Typography>
            <Typography sx={{mb: 1}}>Using TDD implement the following calculation as a BMI calculator in the metric, once you have done that use TDD to add a system switch and do both the calculations in imperial. </Typography>
            <img style={{width: '300px'}} src={"/bmi.png"} alt={"BMI calculation formula"}/>
        </Box>
    )
}