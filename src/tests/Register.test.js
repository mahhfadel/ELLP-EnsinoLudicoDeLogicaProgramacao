import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Register from '../pages/Register';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock do axios para evitar chamadas reais à API
jest.mock('axios');

jest.mock('react-router-dom', () => ({
  Link: 'a',
  BrowserRouter: ({ children }) => <div>{children}</div>,
  useNavigate: jest.fn(),
}));

describe('Register Component', () => {
  it('deve exibir uma mensagem de erro quando os campos não forem preenchidos', async () => {
    render(
      <Router>
        <Register />
      </Router>
    );

    // Usando getByRole para localizar o botão 'Criar conta'
    const button = screen.getByRole('button', { name: /criar conta/i });
    fireEvent.click(button);

    // Usando findByText para esperar pela mensagem de erro
    const errorMessage = await screen.findByText('Todos os campos devem estar preenchidos.');
    expect(errorMessage).toBeInTheDocument();
  });

  it('deve exibir uma mensagem de erro quando o email for inválido', async () => {
    render(
      <Router>
        <Register />
      </Router>
    );

    
    const button = screen.getByRole('button', { name: /criar conta/i });

    // Preencher os campos obrigatórios primeiro
    const passwordInput = screen.getByLabelText('Senha');
    const confirmPasswordInput = screen.getByLabelText('Confirmar senha');
    const nameInput = screen.getByLabelText('Nome completo');
    const phoneInput = screen.getByLabelText('Telefone');
    const addressInput = screen.getByLabelText('Endereço');
    const birthdateInput = screen.getByLabelText('Data de nascimento');
    const emailInput = screen.getByLabelText('E-mail');

    fireEvent.change(nameInput, { target: { value: 'João Silva' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(addressInput, { target: { value: 'Rua A, 123' } });
    fireEvent.change(birthdateInput, { target: { value: '01/01/2000' } });
    fireEvent.change(passwordInput, { target: { value: 'senha123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'senha456' } });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

    fireEvent.click(button);

    const errorMessage = await screen.findByText('Por favor, insira um e-mail válido.');
    expect(errorMessage).toBeInTheDocument();
  });

  it('deve exibir uma mensagem de erro quando as senhas não coincidirem', async () => {
    render(
      <Router>
        <Register />
      </Router>
    );

    const passwordInput = screen.getByLabelText('Senha');
    const confirmPasswordInput = screen.getByLabelText('Confirmar senha');
    const button = screen.getByRole('button', { name: /criar conta/i });

    // Preencher os campos obrigatórios primeiro
    const nameInput = screen.getByLabelText('Nome completo');
    const phoneInput = screen.getByLabelText('Telefone');
    const addressInput = screen.getByLabelText('Endereço');
    const birthdateInput = screen.getByLabelText('Data de nascimento');
    const emailInput = screen.getByLabelText('E-mail');

    fireEvent.change(nameInput, { target: { value: 'João Silva' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(addressInput, { target: { value: 'Rua A, 123' } });
    fireEvent.change(birthdateInput, { target: { value: '01/01/2000' } });
    fireEvent.change(emailInput, { target: { value: 'joao@example.com' } });

    fireEvent.change(passwordInput, { target: { value: 'senha123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'senha456' } });

    fireEvent.click(button);

    const errorMessage = await screen.findByText('As senhas não coincidem.');
    expect(errorMessage).toBeInTheDocument();
  });

  it('deve chamar a API corretamente ao tentar registrar', async () => {
    render(
      <Router>
        <Register />
      </Router>
    );

    const nameInput = screen.getByLabelText('Nome completo');
    const phoneInput = screen.getByLabelText('Telefone');
    const addressInput = screen.getByLabelText('Endereço');
    const birthdateInput = screen.getByLabelText('Data de nascimento');
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const confirmPasswordInput = screen.getByLabelText('Confirmar senha');
    const button = screen.getByRole('button', { name: /criar conta/i });

    // Preencher todos os campos obrigatórios
    fireEvent.change(nameInput, { target: { value: 'João Silva' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(addressInput, { target: { value: 'Rua A, 123' } });
    fireEvent.change(birthdateInput, { target: { value: '01/01/2000' } });
    fireEvent.change(emailInput, { target: { value: 'joao@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senha123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'senha123' } });

    axios.post.mockResolvedValue({ data: { success: true } });

    fireEvent.click(button);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        `${process.env.REACT_APP_API_URL}register`,
        {
          name: 'João Silva',
          phone: '1234567890',
          address: 'Rua A, 123',
          birthdate: '2000-01-01',
          email: 'joao@example.com',
          password: 'senha123',
        }
      );
    });
  });

  it('deve exibir uma mensagem de erro ao falhar na chamada de API', async () => {
    render(
      <Router>
        <Register />
      </Router>
    );

    const nameInput = screen.getByLabelText('Nome completo');
    const phoneInput = screen.getByLabelText('Telefone');
    const addressInput = screen.getByLabelText('Endereço');
    const birthdateInput = screen.getByLabelText('Data de nascimento');
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const confirmPasswordInput = screen.getByLabelText('Confirmar senha');
    const button = screen.getByRole('button', { name: /criar conta/i });

    // Preencher todos os campos obrigatórios
    fireEvent.change(nameInput, { target: { value: 'João Silva' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(addressInput, { target: { value: 'Rua A, 123' } });
    fireEvent.change(birthdateInput, { target: { value: '01/01/2000' } });
    fireEvent.change(emailInput, { target: { value: 'joao@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senha123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'senha123' } });

    axios.post.mockRejectedValue({ response: { data: { message: 'Erro ao registrar. Tente novamente.' } } });

    fireEvent.click(button);

    const errorMessage = await screen.findByText('Erro ao registrar. Tente novamente.');
    expect(errorMessage).toBeInTheDocument();
  });
});