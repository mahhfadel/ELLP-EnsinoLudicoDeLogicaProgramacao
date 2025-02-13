import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BaseAuthScreen from '../components/BaseAuthScreen';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import './styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Pegando a função login do contexto

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Houve um erro, tente novamente.');

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Todos os campos devem estar preenchidos.');
      setError(true);
      return;
    }

    setError(false);
    setErrorMessage('');

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}login`, { email, password });

      const token = response.data.token;
      if (token) {
        login(token);
        navigate('/home');
      } else {
        throw new Error('Token não recebido.');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Erro ao realizar login.');
      setError(true);
    }
  };

  return (
    <BaseAuthScreen>
      <div className="container">
        <h1 className="title">Login</h1>
        <div className="input-container">
          <Input label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <div className="error"><p>{errorMessage}</p></div>}
          <button className="button" onClick={handleLogin}>Fazer login</button>
        </div>
        <div className="or"><p>ou</p></div>
        <div className="create-account">
          <p>Ainda não tem uma conta? <Link to='/register'>Criar conta</Link></p>
        </div>
      </div>
    </BaseAuthScreen>
  );
}

export default Login;