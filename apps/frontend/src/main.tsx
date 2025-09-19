import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import { Properties } from "./pages/Properties";
import { NavMenu } from "./components/nav-menu/NavMenu";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Dashboard } from "./pages/Dashboard";
import { Landing } from "./pages/Landing";
import { localStoragePersister, queryClient } from "./services/query.client";
import axios from "axios";
import { useSystemInfoQueries } from "./queries/use-system-info.queries";
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Application = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <NavMenu>
                    <Box sx={{ margin: '16px', maxHeight: '100vh', width: "100%", overflow: 'scroll' }}>
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="/dashboard" element={<Dashboard />} />
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
            persistOptions={{ persister: localStoragePersister }}
        >
            <Application />
        </PersistQueryClientProvider>
    </StrictMode>
);
