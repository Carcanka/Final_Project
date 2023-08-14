import "./Inicio.css"
import audnLogo from "../../assets/logo-large.svg"
import {Link} from 'react-router-dom';

function Inicio() {
    return (
        <>
            <div className="inicio-container">
                <div className="inicio-bottom-gradient">
                    <div className="inicio-top-gradient"></div>
                    <div className="logos-logins">
                        <img src={audnLogo} alt="Auden Logo" className="audenLogo" />
                        <h2 className="slogan">Música a medida.</h2>
                        <div className="register-login-section">
                            <button className="inicio-register-button"><Link to={`/register`}>Registrarse Gratis</Link></button>
                            <button className="inicio-login-button"><Link to={`/login`}>Iniciar Sesión</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inicio;