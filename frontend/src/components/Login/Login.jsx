import "./Login.css"
import Flecha from "../../assets/left-icon-placeholder.svg"

function Login() {
    return (
        <>
            <div className="login-container">
                <div className="header-container">
                </div>
                <div className="login-header">
                    <button><img src={Flecha} alt="Ir atrás" /></button>
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
                        <input type="text" className="login-input" />
                    </div>

                    <input type="submit" className="login-submit" value="Iniciar Sesión" />
                    <a href="" className="login-olvidar-contrasenha">¿Olvidaste tu contraseña?</a>
                </form>
            </div>
        </>
    )
}

export default Login;