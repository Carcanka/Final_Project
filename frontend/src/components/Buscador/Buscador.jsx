import "./Buscador.css"
import Friends from "../../assets/friends.svg"
import HomeLogo from "../../assets/home.svg"
import Search from "../../assets/search.svg"
import User from "../../assets/user.svg"

function Buscador() {
    return (
        <div className="main-container-header">
            <div className="header-gradient"></div>
            <div className="buscador-container">

                <form action="">
                    <h1>Buscador</h1>
                    <input type="text" className="buscador-input" value="¿Qué deseas escuchar?" />
                    <div className="buscador-container-cards">
                        <div className="buscador-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                        <div className="buscador-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                        <div className="buscador-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                        <div className="buscador-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                        <div className="buscador-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                        <div className="buscador-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                        {/* <div className="buscador-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                        <div className="buscador-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                        <div className="buscador-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                        <div className="buscador-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                        <div className="buscador-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                        <div className="buscador-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div> */}
                    </div>
                </form>

                <div className="buscador-footer-container">
                    <button className="buscador-footer-container-item">
                        <img src={HomeLogo} alt="" />
                        <span>Inicio</span>
                    </button>
                    <button className="buscador-footer-container-item">
                        <img src={Search} alt="" />
                        <span>Buscador</span>
                    </button>
                    <button className="buscador-footer-container-item">
                        <img src={User} alt="" />
                        <span>Perfil</span>
                    </button>
                    <button className="buscador-footer-container-item">
                        <img src={Friends} alt="" />
                        <span>Amigos</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Buscador;