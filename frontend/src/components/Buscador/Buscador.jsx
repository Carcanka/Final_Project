import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Buscador.css";
import Friends from "../../assets/friends.svg";
import HomeLogo from "../../assets/home.svg";
import Search from "../../assets/search.svg";
import User from "../../assets/user.svg";



function Buscador() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
   try {
    const fetchData = async () => {
  
      const response = await fetch('http://localhost:3000/user/musica');
  
      const json = await response.json();
  
      
      setSongs(json.canciones);
    }
  
  
    fetchData()
   } catch (error) {
    
   }
    
  
  }, []) 
  console.log(songs);
  return (
    <div className="main-container-header">
      <div className="header-gradient"></div>
      <div className="buscador-container">
        <form action="">
          <h1>Buscador</h1>
          <input
            type="text"
            className="buscador-input"
            value="¿Qué deseas escuchar?"
          />
          <ul className="buscador-container-cards">
          {songs.map(song => (
            <li className="buscador-card">
              <img
                src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="imagen musical"
              />
              <h3>{song.titulo}</h3>
              <h4>{song.artista}</h4>
            </li>
                ))}
          </ul>
        </form>

        <div className="buscador-footer-container">
          <Link to="/home" className="buscador-footer-container-item">
            <img src={HomeLogo} alt="" />
            <span>Inicio</span>
          </Link>
          <Link to="/buscador" className="buscador-footer-container-item">
            <img src={Search} alt="" />
            <span>Buscador</span>
          </Link>
          <Link to="/profile" className="buscador-footer-container-item">
            <img src={User} alt="" />
            <span>Perfil</span>
          </Link>
          <Link to="/friends" className="buscador-footer-container-item">
            <img src={Friends} alt="" />
            <span>Amigos</span>
          </Link>
          <div className="footer-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Buscador;
