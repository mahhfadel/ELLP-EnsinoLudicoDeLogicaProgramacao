import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Alunos from "../pages/Alunos";
import { BrowserRouter as Router } from "react-router-dom";

// Mock dos componentes filhos
jest.mock("../components/NavBar", () => () => <div data-testid="navbar"></div>);
jest.mock("../components/AlunosList", () => () => (
    <div data-testid="alunos-list"></div>
));
jest.mock(
    "../components/ModalAdicionarAluno",
    () =>
        ({ isOpen, onClose }) =>
            isOpen ? (
                <div data-testid="modal">
                    <button onClick={onClose}>Fechar</button>
                </div>
            ) : null
);

describe("Alunos Component", () => {
    it("deve renderizar corretamente os componentes principais", () => {
        render(
            <Router>
                <Alunos />
            </Router>
        );

        expect(screen.getByTestId("navbar")).toBeInTheDocument();
        expect(screen.getAllByTestId("alunos-list").length).toBe(4);
        expect(screen.getByText(/alunos/i)).toBeInTheDocument();
    });

    it("deve abrir e fechar o modal ao clicar no botão", async () => {
        render(
            <Router>
                <Alunos />
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
