import React from "react"
import {Box, Divider, Grid, Typography} from "@mui/material";
import {Card} from "../components/Card";
import {easyTasks, hardTasks, mediumTasks, Task, veryEasyTasks, veryHardTasks} from "../utils/tasks";

export const Landing = () => {
    return (
        <>
            <Box>
                <Typography>Welcome to my full stack developer training program.</Typography>
                <Typography>In this program you have just been hired by "Nexal" a futuristic tech company who is
                    building a SAAS product.</Typography>
                <Typography>Below you will find 20 different tasks,
                    starting from very easy progressing through to very hard. My hope is that by playing around with
                    this
                    site it will give you some insight into what being a web developer is like. The tasks are based off
                    of real life issues that I have had to solve.
                    any issues just message me on discord HughWilliams90.
                </Typography>
                <Divider sx={{margin: '12px 0'}}/>
                <Box sx={{flexGrow: 1}}>
                    <Section title={'Very easy'} tasks={veryEasyTasks}/>
                    <Section title={'Easy'} tasks={easyTasks}/>
                    <Section title={'Medium'} tasks={mediumTasks}/>
                    <Section title={'Hard'} tasks={hardTasks}/>
                    <Section title={'Very Hard'} tasks={veryHardTasks}/>
                </Box>
            </Box>
        </>
    )
}

const Section = ({title, tasks}: {title: string, tasks: Task[]}) => {
    return (
        <>
            <Typography>{title}</Typography>
            <Grid container spacing={2}>
                {tasks.map(t => <Grid size={3}><TaskCard {...t} /></Grid>)}
            </Grid></>
    );
}

const TaskCard = ({title, description, context}: Task) => {
    return (
        <Card>
            <Typography>{title}</Typography>
            <Typography>{description}</Typography>
            <Typography>{context}</Typography>
        </Card>
    )
}