import React from 'react';
import "./CupidoMusical.css";
import Flecha from "../../assets/left-icon-placeholder.svg";
import { Link } from 'react-router-dom';

function CupidoMusical() {
    return (
        <div className="cupido-musical-container">
            <div className="header-gradient">
            </div>
            <div className="cupido-musical-header">
                <Link to="/home">
                    <button><img src={Flecha} alt="Ir atrás" /></button>
                </Link>
                <h3>Cupido Musical</h3>
                <div></div>
            </div>
            <form action="">
                <input type="submit" className="cupido-musical-submit" value="Crear Playlist" />
            </form>
        </div>
    );
}

export default CupidoMusical;
