import React, {useState} from "react"
import {Box, Checkbox, Divider, FormControlLabel, Grid, Typography} from "@mui/material";
import {Card} from "../components/Card";
import {useSystemInfoQueries} from "../queries/use-system-info.queries";
import {Task} from "../services/system.service";
import {useTaskQueries} from "../queries/use-task.queries";

export const Landing = () => {
    const {fetchTasksQuery} = useTaskQueries();
    const {data} = fetchTasksQuery;
    return (
        <>
            <Box>
                <Typography variant="h2">Welcome to Nexal</Typography>
                <Box sx={{mt: 2}}>
                    <Typography>In this test you have just been hired by "Nexal" a futuristic tech company who is building a SAAS product.</Typography>
                    <Typography>Below you will find 20 different tasks, starting from very easy progressing through to very hard.</Typography>
                    <Typography>My hope is that by playing around with this site it will give you some insight into what being a web developer is like.</Typography>
                    <Typography>The tasks are based off of real life issues that I have had to solve.</Typography>
                    <Typography>Any issues just message me on discord - HughWilliams90.</Typography>
                </Box>
                <Divider sx={{m: 1}}/>
                <Box sx={{flexGrow: 1}}>
                    {data &&
                        <>
                            <Grid container spacing={2} sx={{marginBottom: '24px'}}>
                                {data?.map(t => <Grid size={3} sx={{display: 'flex'}}><TaskCard {...t} /></Grid>)}
                            </Grid>
                        </>
                    }
                </Box>
            </Box>
        </>
    )
}

const TaskCard = (task: Task) => {
    const {taskName, taskDescription, taskSubtitle, difficulty, completed, completedAt} = task;
    const { completeTaskMutation } = useTaskQueries();
    const actions =
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
            <FormControlLabel control={<Checkbox checked={completed} onClick={() => completeTaskMutation.mutate(task)}/>} label={"Completed"}/>
            {completedAt && <Typography>{completedAt}</Typography>}
        </Box>

    return (
        <Card actions={actions}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography>{taskName} - {taskSubtitle}</Typography>
                <Typography sx={{color: getDifficultyColour(difficulty)}}>{difficulty}</Typography>
            </Box>
            <Divider sx={{margin: '6px 0'}}/>
            <Typography>{taskDescription}</Typography>
        </Card>
    )
}

const getDifficultyColour = (difficulty: string) => {
    switch (difficulty) {
        case 'Very easy': return '#00FF00';
        case 'Easy': return '#90EE90';
        case 'Medium': return '#FFFF00';
        case 'Hard': return '#FFA500';
        case 'Very hard': return '#ff0000';
        default: return 'white';
    }

}