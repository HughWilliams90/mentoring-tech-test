import {Box, Link, List, ListItem, Typography} from "@mui/material";
import React from "react";

export const Documentation = () => {
    const backendDeps = [
        {name: 'FoalTS', link: 'https://foalts.org/'},
        {name: 'TypeORM', link: 'https://typeorm.io/'},
        {name: 'Turborepo', link: 'https://turborepo.com/'},
    ];

    const frontendDeps = [
        {name: 'React', link: 'https://react.dev/'},
        {name: 'TanStack', link: 'https://tanstack.com/'},
        {name: 'Zustand', link: 'https://zustand.docs.pmnd.rs/getting-started/introduction'},
        {name: 'Material ui', link: 'https://mui.com/'},
        {name: 'Axios', link: 'https://axios-http.com/'},
        {name: 'Luxon', link: 'https://www.npmjs.com/package/luxon'},
        {name: 'Vite', link: 'https://vite.dev/'},
    ];

    const commonDeps = [
        {name: 'Turborepo', link: 'https://turborepo.com/'},
        {name: 'Typescript', link: 'https://www.typescriptlang.org/'},
    ]


    return (
        <Box>
            <Typography variant={"h4"}>Documentation</Typography>
            <DepsSection title={"Frontend dependencies"} deps={frontendDeps}/>
            <DepsSection title={"Backend dependencies"} deps={backendDeps}/>
            <DepsSection title={"Common dependencies"} deps={commonDeps}/>
        </Box>
    )
};

const DepsSection = ({title, deps}: { title: string, deps: { name: string, link: string }[] }) => {
    return (
        <Box sx={{marginTop: '12px'}}>
            <Typography variant={"h5"}>{title}</Typography>
            <List>
                {deps.map(dep =>
                    <ListItem>
                        <Link
                            sx={{cursor: 'pointer'}}
                            href={dep.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >{dep.name}</Link>
                    </ListItem>)}
            </List>
        </Box>
    )
}