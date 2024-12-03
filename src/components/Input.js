import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importando os ícones de olho

import './styles/Input.css';

function Input({ label, value, onChange, type = 'text' }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Gerando um id único para o input com base no label
  const inputId = label.toLowerCase().replace(/\s+/g, '-'); // Ex: 'Senha' => 'senha'

  return (
    <div className='customInputContainer'>
      <label className='customInputLabel' htmlFor={inputId}>{label}</label> {/* Usando htmlFor para associar ao input */}
      <div className='customInputWrapper'>
        <input
          className='customInput'
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          name={label}
          id={inputId}  // Associando id ao input
        />
        {type === 'password' && (
          <button
            className='togglePasswordButton'
            type='button'
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Ocultar' : 'Exibir'}  // Acessibilidade
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;