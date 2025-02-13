import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../pages/Home";
import { BrowserRouter as Router } from "react-router-dom";

// Mock dos componentes filhos
jest.mock("../components/NavBar", () => () => <div data-testid="navbar"></div>);
jest.mock("../components/CardOficinas", () => () => (
    <div data-testid="card-oficina"></div>
));
jest.mock(
    "../components/ModalAdicionarOficina",
    () =>
        ({ isOpen, onClose }) =>
            isOpen ? (
                <div data-testid="modal">
                    <button onClick={onClose}>Fechar</button>
                </div>
            ) : null
);

describe("Home Component", () => {
    it("deve renderizar corretamente os componentes principais", () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        expect(screen.getByTestId("navbar")).toBeInTheDocument();
        expect(screen.getAllByTestId("card-oficina").length).toBe(4);
        expect(screen.getByText(/oficinas/i)).toBeInTheDocument();
    });

    it("deve abrir e fechar o modal ao clicar no botão", async () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        fireEvent.click(screen.getByText(/adicionar oficina/i));
        expect(screen.getByTestId("modal")).toBeInTheDocument();

        fireEvent.click(screen.getByText(/fechar/i));
        await waitFor(() => {
            expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
        });
    });
});
