import "./Inicio.css"
import Gif from "../../assets/inicio-gif.gif"
import audnLogo from "../../assets/logo-large.svg"

function Inicio() {
    return (
        <>
            <div className="inicio-top-gradient"></div>
            <div className="inicio-img"><img src={Gif} alt="" /></div>
            <div>
                <img src={audnLogo} alt="Auden Logo" className="audenLogo" />
                <h2 className="slogan">Música a medida.</h2>
            </div>
            <button className="inicio-register-button">Registrarse Gratis</button>
            <button className="inicio-login-button">Iniciar Sesión</button>
            <div className="inicio-bottom-gradient"></div>
        </>
    );
}

export default Inicio;