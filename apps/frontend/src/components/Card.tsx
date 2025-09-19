import {Box, Card as MaterialCard, CardContent, CardActions, Divider} from '@mui/material'
import React from 'react'

export const Card = ({children, actions}: { children: React.ReactNode, actions?: React.ReactNode }) => {
    return (
        <MaterialCard variant={"outlined"} sx={{flexGrow: 1, display: "flex", flexDirection: "column"}}>
            <CardContent sx={{flexGrow: 1}}>
                {children}
            </CardContent>
            {actions &&
                <>
                    <Divider/>
                    <CardActions>
                        {actions}
                    </CardActions>
                </>
            }
        </MaterialCard>
    )
}