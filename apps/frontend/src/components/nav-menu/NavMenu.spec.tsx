import {render, screen} from "@testing-library/react";
import {NavMenu} from "./NavMenu";
import React from "react";
import {BrowserRouter} from "react-router-dom";

describe('mainNav', () => {
    it('should render correctly', async () => {
        render(<BrowserRouter>
                <NavMenu>
                    <div>Body</div>
                </NavMenu>
            </BrowserRouter>
        )

        const landingTab = screen.getByTestId('Home');
        const dashboardTab = screen.getByTestId('Dashboard');

        expect(dashboardTab).toBeInTheDocument();
        expect(dashboardTab.textContent).toBe("Doshbard")
        expect(landingTab).toBeInTheDocument();
        expect(landingTab.textContent).toBe("Home");
    })
});