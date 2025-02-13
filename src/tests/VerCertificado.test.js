import React from "react";
import { render, screen } from "@testing-library/react";
import VerOficina from "../pages/VerOficina";
import { BrowserRouter as Router } from "react-router-dom";

// Mock dos componentes filhos
jest.mock("../components/NavBar", () => () => <div data-testid="navbar"></div>);
jest.mock("../components/AlunoListCertificados", () => () => (
    <div data-testid="aluno-list-certificado"></div>
));

describe("VerOficina Component", () => {
    it("deve renderizar corretamente os componentes principais", () => {
        render(
            <Router>
                <VerOficina />
            </Router>
        );

        expect(screen.getByTestId("navbar")).toBeInTheDocument();
        expect(screen.getAllByTestId("aluno-list-certificado").length).toBe(3);
        expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument();
        expect(
            screen.getByText(/gerar todos certificados/i)
        ).toBeInTheDocument();
    });
});
