import React from "react";
import { render, screen } from "@testing-library/react";
import Certificados from "../pages/Certificados";
import { BrowserRouter as Router } from "react-router-dom";

// Mock dos componentes filhos
jest.mock("../components/NavBar", () => () => <div data-testid="navbar"></div>);
jest.mock("../components/CardCertificados", () => () => (
    <div data-testid="card-certificado"></div>
));

describe("Certificados Component", () => {
    it("deve renderizar corretamente os componentes principais", () => {
        render(
            <Router>
                <Certificados />
            </Router>
        );

        expect(screen.getByTestId("navbar")).toBeInTheDocument();
        expect(screen.getAllByTestId("card-certificado").length).toBe(4);
        expect(screen.getByText(/certificados/i)).toBeInTheDocument();
    });
});
