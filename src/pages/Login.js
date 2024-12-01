import React, { useState } from 'react';
import BaseAuthScreen from '../components/BaseAuthScreen';
import Input from '../components/Input';

import axios from 'axios';

import './styles/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Houve um erro, tente novamente.');

  const handleLogin = async () => {
    // Validação básica dos campos
    if (email === '' || password === '') {
      setErrorMessage('Todos os campos devem estar preenchidos.');
      setError(true);
      return;
    }
  
    // Resetando o estado de erro antes da requisição
    setError(false);
    setErrorMessage('');
  
    const url = `${process.env.REACT_APP_API_URL}/login`;
    try {
      console.log(url)
      const response = await axios.post(url, { email, password });
  
      console.log('Dados do usuário:', response.data);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Erro ao realizar login. Verifique suas credenciais.');
      } else if (error.request) {
        setErrorMessage('Não foi possível se conectar ao servidor. Tente novamente mais tarde.');
      } else {
        setErrorMessage('Ocorreu um erro inesperado. Tente novamente.');
      }
      setError(true);
    }
  };
  

  return (
    <BaseAuthScreen>
      <div className="container">
        <h1 className="title">Login</h1>
        <div className="input-container">
          <Input
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div 
            className="error" 
            style={{ visibility: error ? 'visible' : 'hidden', opacity: error ? 1 : 0, transition: 'opacity 0.3s' }}
          >
            <p>{errorMessage}</p>
          </div>
          <button className="button" onClick={handleLogin}>
            Fazer login
          </button>
        </div>
        <div className="or">
          <p>ou</p>
        </div>
        <div className="create-account">
          <p>
            Ainda não tem uma conta? <Link to='/register'>Criar conta</Link>
          </p>
        </div>
      </div>
    </BaseAuthScreen>
  );
}

export default Login;