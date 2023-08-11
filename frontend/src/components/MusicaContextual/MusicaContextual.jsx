import "./MusicaContextual.css"
import Flecha from "../../assets/left-icon-placeholder.svg"

function MusicaContextual() {
    return (
        <>
            <div className="header-container">
            </div>
            <div className="musica-contextual-container">
                <div className="musica-contextual-header">
                    <button><img src={Flecha} alt="Ir atrás" /></button>
                    <h3>Musica Contextual</h3>
                    <div></div>
                </div>
                <form action="">
                    <div className="input-container">
                        <h2>Nombre de Usuario o E-mail:</h2>
                        <input type="text" className="musica-contextual-input" />
                    </div>

                    <div className="input-container">
                        <h2>Contraseña:</h2>
                        <input type="text" className="musica-contextual-input" />
                    </div>

                    <input type="submit" className="musica-contextual-submit" value="Iniciar Sesión" />
                    <a href="" className="musica-contextual-olvidar-contrasenha">¿Olvidaste tu contraseña?</a>
                </form>
            </div>

        </>
    );
}

export default MusicaContextual;