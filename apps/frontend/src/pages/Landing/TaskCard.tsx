import {Task} from "../../services/system.service";
import {useTaskQueries} from "../../queries/use-task.queries";
import {Box, Checkbox, Divider, FormControlLabel, Typography} from "@mui/material";
import {Card} from "../../components/Card";
import React from "react";

export const TaskCard = (task: Task) => {
    const {taskName, taskDescription, taskSubtitle, difficulty, completed, completedAt} = task;
    const { completeTaskMutation } = useTaskQueries();
    const actions =
        <Box sx={{justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
            <FormControlLabel control={<Checkbox checked={completed} onClick={() => completeTaskMutation.mutate(task)}/>} label={"Completed"}/>
            {completedAt && <Typography>{completedAt}</Typography>}
        </Box>

    return (
        <Card actions={actions}>
            <Box>
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