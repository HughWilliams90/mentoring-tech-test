import React from "react"
import {Box, Divider, Grid, Typography} from "@mui/material";
import {useTaskQueries} from "../../queries/use-task.queries";
import {TaskCard} from "./TaskCard";

export const Landing = () => {
    const {fetchTasksQuery} = useTaskQueries();
    const {data, isPending} = fetchTasksQuery;
    return (
        <>
            <Box>
                <Typography variant="h2">Welcome to Nexal</Typography>
                <Box sx={{mt: 2}}>
                    <Typography>In this test you have just been hired by "Nexal" a futuristic tech company who is building a fitness based SAAS product.</Typography>
                    <Typography>Below you will find 20 different tasks, starting from very easy progressing through to very hard.</Typography>
                    <Typography>My hope is that by playing around with this site it will give you some insight into what being a web developer is like.</Typography>
                    <Typography>The tasks are based off of real life issues that I have had to solve.</Typography>
                    <Typography>Any issues just message me on discord - HughWilliams90.</Typography>
                </Box>
                <Divider sx={{m: 1}}/>
                <Box id="HIDDEN_ELEMENT" sx={{display: 'none', width: '500px', height: '500px'}}>HIDDEN</Box>
                <Box sx={{flexGrow: 1}}>
                    {!isPending &&
                        <>
                            <Grid container spacing={2} sx={{marginBottom: '24px'}}>
                                {!isPending && data?.map(t => <Grid size={3} sx={{display: 'flex'}}><TaskCard {...t} /></Grid>)}
                            </Grid>
                        </>
                    }
                </Box>
            </Box>
        </>
    )
}