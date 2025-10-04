import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavMenu} from "./components/nav-menu/NavMenu";
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Dashboard} from "./pages/dashboard/Dashboard";
import {Landing} from "./pages/Landing/Landing";
import {localStoragePersister, queryClient} from "./services/query.client";
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import Outfit from './fonts/Outfit-Regular.ttf';
import {Calculations} from "./pages/calculations/Calculations";
import {Documentation} from "./pages/documentation/Documentation";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212', // softer dark gray, not pure black
            paper: '#1e1e1e',   // slightly lighter for cards, modals, etc.
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                font-family: 'Outfit';
                src: url(${Outfit}) format('truetype');
                font-weight: 400;
                font-style: normal;
                }
      `,
        },
    },
    typography: {
        fontFamily: 'Outfit',
    },
});

const Application = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <NavMenu>
                    <Box sx={{maxHeight: '100vh', width: "100%", overflow: 'scroll'}}>
                        <Routes>
                            <Route path="/" element={<Landing/>}/>
                            <Route path="/documentation" element={<Documentation/>}/>
                            <Route path="/dashboard" element={<Dashboard/>}/>
                            <Route path="/calculations" element={<Calculations/>}/>
                        </Routes>
                    </Box>
                </NavMenu>
            </ThemeProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <StrictMode>
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{persister: localStoragePersister}}
        >
            <Application/>
        </PersistQueryClientProvider>
    </StrictMode>
);
