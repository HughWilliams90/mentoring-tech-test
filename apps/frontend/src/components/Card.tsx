import {Box, Card as MaterialCard, CardContent} from '@mui/material'
import React from 'react'

export const Card = ({children}: { children: React.ReactNode }) => {

    return (
        <Box sx={{display: 'inline-block', maxWidth: 300 }}>
            <MaterialCard variant={"outlined"}>
                <CardContent>
                    {children}
                </CardContent>
            </MaterialCard>
        </Box>
   )
}