import "./Register.css"
import Flecha from "../../assets/left-icon-placeholder.svg"

function Register() {
    return (
        <>
            <div className="register-container">
                <div className="header-gradient"></div>
                <div className="register-header">
                    <button><img src={Flecha} alt="Ir atrás" /></button>
                    <h3>Crear Cuenta</h3>
                    <div></div>
                </div>
                <h1>¿Cuál es tu correo electrónico?</h1>
                <form action="" className="register-form">
                    <h2>Correo electrónico</h2>
                    <input type="text" className="register-input" />
                    <span>Deberás poder confirmarlo luego.</span>
                    <input type="submit" className="register-submit" value="Continuar" />
                </form>
            </div>
        </>
    )
}

export default Register;