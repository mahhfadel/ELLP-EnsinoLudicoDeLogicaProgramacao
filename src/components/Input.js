import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importando os ícones de olho

import './styles/Input.css';

function Input({ label, value, onChange, type = 'text' }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='customInputContainer'>
      <h3 className='customInputLabel'>{label}</h3>
      <div className='customInputWrapper'>
        <input
          className='customInput'
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
        />
        {type === 'password' && (
          <button
            className='togglePasswordButton'
            type='button'
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
