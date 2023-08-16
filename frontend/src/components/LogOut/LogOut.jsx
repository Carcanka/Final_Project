import React, { useEffect, useState } from "react";
import "./LogOut.css";
import { Link } from "react-router-dom";
import Flecha from "../../assets/left-icon-placeholder.svg";
// import { useNavigate } from "react-router-dom";

function Configuracion() {
    return (
        <>
            <div className="config-container">
                <div className="header-gradient"></div>
                <div className="config-header">
                    <button>
                        <Link to={`/home`}>
                            <img src={Flecha} alt="Ir atrás" />
                        </Link>
                    </button>

                    <h3>Configuración</h3>
                    <div></div>
                </div>

                <div className="inicio-bottom-gradient">


                    <div className="logout-buttons-container">
                        <button className="button-container-apariencia">Editar apariencia</button>
                        <button className="button-container-perfil">Editar perfil</button>
                    </div>
                    <div className="logout-spans-container">
                        <span>Versión: V1.25.03</span>
                        <span>Cerrar Sesión</span>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Configuracion;
