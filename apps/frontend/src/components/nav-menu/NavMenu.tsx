import {Link as RouterLink} from "react-router-dom";
import {
    Box,
    Collapse,
    css,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper, Tooltip, Typography
} from "@mui/material";
import React, {useMemo} from "react";
import HomeIcon from '@mui/icons-material/Home';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CalculateIcon from '@mui/icons-material/Calculate';
import {useSystemInfoQueries} from "../../queries/use-system-info.queries";
import packageJson from "../../../package.json"

export const NavMenu = ({children}: Props) => {
    return (
        <div style={{display: 'flex'}}>
            <NavMenuItems/>
            <Box sx={{mt: 2, ml: 2, mr: 2, width: '100%'}}>{children}</Box>
        </div>
    );
};

const NavMenuItems = () => {
    const [open, setOpen] = React.useState(false);
    const MenuIcon = useMemo(() => open ? WestIcon : EastIcon, [open])

    return (
        <Paper>
            <Collapse in={open} orientation="horizontal" collapsedSize={60} sx={collapseStyles(open)}>
                <Box>
                    <List>
                        <div style={{width: '100%'}}><img src={"/nexal.png"} alt={"NEXAL"}
                                                          style={{width: '64px', height: '64px'}}/></div>
                        <Divider/>
                        {tabs.map(tab => <Tab key={tab.id}{...tab} />)}
                    </List>
                </Box>
                <Box>
                    <Divider/>
                    <ListItemButton sx={{height: '48px'}} onClick={() => setOpen(!open)}>
                        <ListItemIcon><MenuIcon/></ListItemIcon>
                        {open && <ListItemText>Collapse</ListItemText>}
                    </ListItemButton>
                    <Divider/>
                    <Tooltip title={<TooltipContent/>}>
                        <ListItemText
                            sx={{ml: '8px', flex: 1, cursor: 'pointer'}}>v{packageJson.version}</ListItemText>
                    </Tooltip>
                </Box>
            </Collapse>
        </Paper>
    );
}

const TooltipContent = () => {
    const {fetchHealthQuery} = useSystemInfoQueries();
    const {data} = fetchHealthQuery;

    return (
        <Box>
            <Typography>Web version: {packageJson.version}</Typography>
            <Typography>Server version: {data?.version}</Typography>
        </Box>
    );
};
const Tab = ({id, title, path, icon}: Tab) => {
    return (
        <ListItem disableGutters>
            <ListItemButton to={path} component={RouterLink}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText data-testid={id} sx={{paddingRight: '32px'}}>{title}</ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

const tabs: Tab[] = [
    {title: 'Home', id: 'Home', path: '/', icon: <HomeIcon color="primary"/>},
    {title: 'Documentation', id: 'Documentation', path: '/documentation', icon: <LibraryBooksIcon color="primary"/>},
    {title: 'Doshbard', id: 'Dashboard', path: '/dashboard', icon: <DashboardIcon color="primary"/>},
    {title: 'Calculations', id: 'Calculations', path: '/calculations', icon: <CalculateIcon color="primary"/>},
];

interface Props {
    children: React.ReactNode;
}

interface Tab {
    title: string;
    id: string;
    path: string;
    icon: React.ReactNode;
}


const collapseStyles = (open: boolean) => css`
    position: sticky;
    overflow: auto;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: ${open ? '100%' : '60px'};

    .MuiCollapse-wrapperInner {
        display: flex;
        flex-direction: column;
    }
`;