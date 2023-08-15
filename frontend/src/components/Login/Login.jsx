import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Flecha from '../../assets/left-icon-placeholder.svg';

function Login() {
  return (
    <>
      <div className="login-container">
        <div className="header-gradient"></div>
        <div className="login-header">
        <button><Link to={`/`}><img src={Flecha} alt="Ir atrás" /></Link></button>      
            
          
          <h3>Iniciar Sesión</h3>
          <div></div>
        </div>
        <form action="">
          <div className="input-container">
            <h2>Nombre de Usuario o E-mail:</h2>
            <input type="text" className="login-input" />
          </div>

          <div className="input-container">
            <h2>Contraseña:</h2>
            <input type="password" className="login-input" />
          </div>

          <input type="submit" className="login-submit" value="Iniciar Sesión" />
          <p>
            <a href="" className="reset-password">
              ¿Olvidaste tu contraseña?
            </a>
          </p>
        </form>
        <div className="footer-container">
          <Link to="/register" className="footer-link">
            Crear una cuenta
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
