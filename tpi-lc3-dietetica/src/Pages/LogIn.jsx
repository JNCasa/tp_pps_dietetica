import './PagesCSS/Form.css';
import { jwtDecode } from 'jwt-decode';
import { useForm } from '../Hooks/useForm';
import { useNavigate } from "react-router-dom";
import { useThemeContext } from '../Context/ThemeContext';
import UseApiBackend from '../Hooks/useApiBackend';
//context lucas
import { useContext } from "react";
import UserContext from "../Context/UserContext";
//


import React, { useState } from 'react';
//practica con lucas
function LoginComponent() {
  //context lucas
  const { user, setUser } = useContext(UserContext);
  //


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'https://localhost:7184/api/Auth';
    const data = {
      userName: username, password: password
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        const jwt = jwtDecode(data.jwt);
        //YA TENEMOS LOS DATOS DEL USUARIO
        setUser({ name: jwt.unique_name, rol: jwt.role })
        console.log(data); // Maneja la respuesta de la 



        localStorage.setItem('jwt', JSON.stringify(data.jwt));//Almacena en el local str

      })
      .catch(error => {
        console.error('Error:', error);
        localStorage.removeItem('jwt');
      });
  };


  return (

    <div className="form-container" >
      <h2>Iniciá sesión</h2>
      <div className="form-elements">
        <form >
          <label>
            Usuario:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>

          <button
            onClick={handleSubmit} type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
