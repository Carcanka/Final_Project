import React from 'react';
import './RegisterDatos.css';
import { Link } from 'react-router-dom';
import Flecha from '../../assets/left-icon-placeholder.svg';

function RegisterDatos() {
  return (
    <>
      <div className="login-container">
        <div className="header-gradient"></div>
        <div className="login-header">
        <button><Link to={`/`}><img src={Flecha} alt="Ir atrás" /></Link></button>      
            
          
          <h3>Crear una cuenta</h3>
          <div></div>
        </div>
        <h1 className='register-title'>Ingresa un Nombre de Usuario y contraseña:</h1>
        <form action="">
          <div className="input-container">            
            <h2>Nombre de Usuario:</h2>
            <input type="text" className="login-input" />
          </div>

          <div className="input-container">
            <h2>Contraseña:</h2>
            <input type="password" className="login-input" />
            <span className='password-text'>debera contener al menos 8 caracteres</span>
          </div>
            <div className='conditions'>
          <input type='checkbox'/>
          <span>he leido y acepto los terminos y condiciones</span>
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


export default RegisterDatos;