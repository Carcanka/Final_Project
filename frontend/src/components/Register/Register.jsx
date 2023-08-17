import React from "react";
import "./Register.css";
import Flecha from "../../assets/left-icon-placeholder.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate ()
  const [email, setEmail] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contraseniaUsuario, setContraseniaUsuario] = useState("");

  const [paso, setPaso] = useState(1);
  const submitEmail = (e) => {
    e.preventDefault();
    setPaso(2);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    console.log({email,nombreUsuario,contraseniaUsuario});
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "nombre": nombreUsuario,
  "email": email,
  "password": contraseniaUsuario
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
  credentials: "include"
};

const res = await fetch("http://localhost:3000/auth/register", requestOptions)
  const data = await res.json()
  if (res.ok) {
    navigate ("/home")
  }
 };


  return (
    <>
      <div className="register-container">
        <div className="header-gradient"></div>
        <div className="register-header">
          <Link to="/">
            <button>
              <img src={Flecha} alt="Ir atrás" />
            </button>
          </Link>
          <h3>Crear Cuenta</h3>
          <div></div>
        </div>
        <h1>¿Cuál es tu correo electrónico?</h1>
        {paso === 1 ? (
          <form onSubmit={submitEmail} className="register-form">
            <h2>Correo electrónico</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="register-input"
            />
            <span>Deberás poder confirmarlo luego.</span>
            <button type="submit" className="register-submit">
              Continuar
            </button>
          </form>
        ) : (
          <form onSubmit={submitForm} className="register-form">
            <h1 className="register-title">
              Ingresa un Nombre de Usuario y contraseña:
            </h1>
            <div className="input-container">
              <h2>Nombre de Usuario:</h2>
              <input type="text" value={nombreUsuario}
              onChange={(e) => {
                setNombreUsuario(e.target.value);
              }} className="login-input" />
            </div>

            <div className="input-container">
              <h2>Contraseña:</h2>
              <input type="password" value={contraseniaUsuario}
              onChange={(e) => {
                setContraseniaUsuario(e.target.value);
              }} className="login-input" />
              <span className="password-text">
                debera contener al menos 8 caracteres
              </span>
            </div>
            <div className="conditions">
              <input type="checkbox" />
              <span>he leido y acepto los terminos y condiciones</span>
            </div>          
            <p>
              <a href="" className="reset-password">
                ¿Olvidaste tu contraseña?
              </a>
            </p>
            <button type="submit" className="register-submit">
              registrarse
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default Register;
