import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import VerOficina from "../pages/VerOficina";
import { BrowserRouter as Router } from "react-router-dom";

// Mock dos componentes filhos
jest.mock("../components/NavBar", () => () => <div data-testid="navbar"></div>);
jest.mock("../components/AlunosListOficina", () => () => (
    <div data-testid="aluno-list-oficina"></div>
));
jest.mock(
    "../components/ModalAdicionarAlunoCurso",
    () =>
        ({ isOpen, onClose }) =>
            isOpen ? (
                <div data-testid="modal">
                    <button onClick={onClose}>Fechar</button>
                </div>
            ) : null
);

describe("VerOficina Component", () => {
    it("deve renderizar corretamente os componentes principais", () => {
        render(
            <Router>
                <VerOficina />
            </Router>
        );

        expect(screen.getByTestId("navbar")).toBeInTheDocument();
        expect(screen.getAllByTestId("aluno-list-oficina").length).toBe(4);
        expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument();
    });

    it("deve abrir e fechar o modal ao clicar no botão", async () => {
        render(
            <Router>
                <VerOficina />
            </Router>
        );

        fireEvent.click(screen.getByText(/adicionar alunos/i));
        expect(screen.getByTestId("modal")).toBeInTheDocument();

        fireEvent.click(screen.getByText(/fechar/i));
        await waitFor(() => {
            expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
        });
    });
});
