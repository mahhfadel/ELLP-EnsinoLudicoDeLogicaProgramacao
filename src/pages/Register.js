import React, { useState } from 'react';
import BaseAuthScreen from '../components/BaseAuthScreen';
import Input from '../components/Input';

import axios from 'axios';

import './styles/Register.css';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Houve um erro, tente novamente.');

  const handleRegister = async () => {
    if (name === '' || phone === '' || address === '' || birthdate === '' || email === '' || password === '' || confirmPassword === '') {
      setErrorMessage('Todos os campos devem estar preenchidos.');
      setError(true);
      return;
    }
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, insira um e-mail válido.');
      setError(true);
      return;
    }
  
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      setError(true);
      return;
    }
  
    if (password.length < 6) {
      setErrorMessage('A senha deve ter pelo menos 6 caracteres.');
      setError(true);
      return;
    }
  
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dateRegex.test(birthdate)) {
      setErrorMessage('Data de nascimento inválida. Use o formato DD/MM/AAAA.');
      setError(true);
      return;
    }
  
    const [day, month, year] = birthdate.split('/').map((el) => parseInt(el));
    const dateObj = new Date(year, month - 1, day);
  
    if (dateObj.getDate() !== day || dateObj.getMonth() !== month - 1 || dateObj.getFullYear() !== year) {
      setErrorMessage('Data de nascimento inválida.');
      setError(true);
      return;
    }
  
    setError(false);
    setErrorMessage('');
  
    const url = `${process.env.REACT_APP_API_URL}register`;
    try {
      const response = await axios.post(url, { name, phone, address, birthdate: `${year}-${month}-${day}`, email, password });
  
      console.log('Dados do usuário:', response.data);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Erro ao registrar. Tente novamente.');
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
      <div className="register-container">
        <div className='scroll-container'>
        <h1 className="title">Criar conta</h1>
        <div className="input-container">
          <Input
            label="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            label="Endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            label="Data de nascimento"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
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
          <Input
            label="Confirmar senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div 
            className="error" 
            style={{ visibility: error ? 'visible' : 'hidden', opacity: error ? 1 : 0, transition: 'opacity 0.3s' }}
          >
            <p>{errorMessage}</p>
          </div>
          <button className="button" onClick={handleRegister}>
            Criar conta
          </button>
        </div>
        <div className="or">
          <p>ou</p>
        </div>
        <div className="create-account">
          <p>
            Já tem uma conta? <Link to='/'>Criar conta</Link>
          </p>
        </div>
        </div>
      </div>
    </BaseAuthScreen>
  );
}

export default Register;