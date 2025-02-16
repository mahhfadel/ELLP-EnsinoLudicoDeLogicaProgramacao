import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import BaseAuthScreen from '../components/BaseAuthScreen';
import Input from '../components/Input';

import axios from 'axios';

import './styles/Register.css';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

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
    if (!name || !phone || !address || !birthdate || !email || !password || !confirmPassword) {
        setErrorMessage('Todos os campos devem estar preenchidos.');
        setError(true);
        return;
    }

    if (password !== confirmPassword) {
        setErrorMessage('As senhas não coincidem.');
        setError(true);
        return;
    }

    setError(false);
    setErrorMessage('');

    // Formatando a data para MM/DD/YYYY
    const formattedBirthdate = new Date(birthdate).toLocaleDateString('en-US');

    const url = `${process.env.REACT_APP_API_URL}register`;
    try {
        const response = await axios.post(url, {
            name,
            phone,
            address,
            birthdate: formattedBirthdate, // Data formatada
            email,
            password
        });

        login(response.data); // Salva o token no AuthContext

        navigate('/home');
    } catch (error) {
        setErrorMessage(error.response?.data?.message || 'Erro ao registrar. Tente novamente.');
        setError(true);
    }
};

  return (
    <BaseAuthScreen>
      <div className="register-container">
        <div className='scroll-container'>
          <h1 className="title">Criar conta</h1>
          <div className="input-container">
            <Input label="Nome completo" value={name} onChange={(e) => setName(e.target.value)} />
            <Input label="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Input label="Endereço" value={address} onChange={(e) => setAddress(e.target.value)} />
            <Input label="Data de nascimento" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
            <Input label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input label="Confirmar senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <div className="error" style={{ visibility: error ? 'visible' : 'hidden', opacity: error ? 1 : 0 }}>
              <p>{errorMessage}</p>
            </div>
            <button className="button" onClick={handleRegister}>Criar conta</button>
          </div>
          <div className="or"><p>ou</p></div>
          <div className="create-account">
            <p>Já tem uma conta? <Link to='/'>Entrar</Link></p>
          </div>
        </div>
      </div>
    </BaseAuthScreen>
  );
}

export default Register;