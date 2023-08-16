import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Flecha from "../../assets/left-icon-placeholder.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  // const token = localStorage.getItem("autorizacion");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const senddata = async (e) => {
    console.log(form);
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: form.email,
      password: form.password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };
   
    const res = await fetch("http://localhost:3000/auth/login", requestOptions);
    const data = await res.json();
    if (res.ok) {navigate ("/home") //hacer manejo de error
      
    }
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <div className="login-container">
        <div className="header-gradient"></div>
        <div className="login-header">
          <button>
            <Link to={`/`}>
              <img src={Flecha} alt="Ir atrás" />
            </Link>
          </button>

          <h3>Iniciar Sesión</h3>
          <div></div>
        </div>
        <form action="" onSubmit={senddata}>
          <div className="input-container">
            <h2>Ingrese E-mail:</h2>
            <input
              name="email"
              onChange={onInputChange}
              type="text"
              className="login-input"
            />
          </div>

          <div className="input-container">
            <h2>Contraseña:</h2>
            <input
              name="password"
              onChange={onInputChange}
              type="password"
              className="login-input"
            />
          </div>

          <button type="submit" className="login-submit">
              Iniciar sesion            
          </button>
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
