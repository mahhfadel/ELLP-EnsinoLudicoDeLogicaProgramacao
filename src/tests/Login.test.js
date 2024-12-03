import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../pages/Login';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock da biblioteca axios
jest.mock('axios');

jest.mock('react-router-dom', () => ({
    Link: 'a',
    BrowserRouter: ({ children }) => <div>{children}</div>,
    useNavigate: jest.fn(),
  }));
  

describe('Login Component', () => {
  it('deve renderizar corretamente os campos de e-mail e senha', () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    // Verifica se os campos de e-mail e senha estão na tela
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  });

  it('deve exibir mensagem de erro se os campos não forem preenchidos', async () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    // Clica no botão de login sem preencher os campos
    fireEvent.click(screen.getByText(/fazer login/i));

    // Verifica se a mensagem de erro é exibida
    await waitFor(() => {
      expect(screen.getByText(/todos os campos devem estar preenchidos/i)).toBeInTheDocument();
    });
  });

  it('deve realizar login com sucesso e exibir dados do usuário', async () => {
    // Mock da resposta da API
    axios.post.mockResolvedValue({ data: { user: 'User data' } });

    render(
      <Router>
        <Login />
      </Router>
    );

    // Preenche os campos de e-mail e senha
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'password123' } });

    // Clica no botão de login
    fireEvent.click(screen.getByText(/fazer login/i));

    // Espera a requisição ser concluída e verifica o resultado
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(expect.any(String), {
        email: 'test@test.com',
        password: 'password123',
      });
    });
  });

  it('deve exibir mensagem de erro se a requisição falhar', async () => {
    // Mock da resposta de erro da API
    axios.post.mockRejectedValue({ response: { data: { message: 'Erro ao realizar login.' } } });

    render(
      <Router>
        <Login />
      </Router>
    );

    // Preenche os campos de e-mail e senha
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'password123' } });

    // Clica no botão de login
    fireEvent.click(screen.getByText(/fazer login/i));

    // Espera a mensagem de erro ser exibida
    await waitFor(() => {
      expect(screen.getByText(/erro ao realizar login/i)).toBeInTheDocument();
    });
  });
});