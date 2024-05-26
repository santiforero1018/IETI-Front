import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import styles from '../css/login.module.css';



const LoginForm = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Por favor, introduce un nombre de usuario y una contraseña');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/v1/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: username, password })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.token); 
        setIsAuthenticated(true);
        navigate('/home'); 
        
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Hubo un problema al iniciar sesión');
    }
  };


  return (
    <div>
      <div id="logo">
        <h1><i>SmartSpend</i></h1>
      </div>
      <section className="stark-login">
        <form onSubmit={handleLogin}>
          <div id="fade-box">
            <input 
              type="text" 
              name="username" 
              id="username" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <button type="submit">Log In</button>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <div className="hexagons">
          
        </div>
      </section>
      <div id="circle1">
        <div id="inner-cirlce1">
          <h2></h2>
        </div>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default LoginForm;