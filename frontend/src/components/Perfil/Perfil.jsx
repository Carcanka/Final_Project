import "./Perfil.css";
import Friends from "../../assets/friends.svg";
import HomeLogo from "../../assets/home.svg";
import Search from "../../assets/search.svg";
import User from "../../assets/user.svg";
import { Link } from "react-router-dom";

function Perfil() {
    return (
        <>
            <div className="user-perfil-container">
                <div className="perfil-img-info-container">
                    <img src="https://s3-alpha-sig.figma.com/img/c936/0518/ca7f35668a09fd4da4977514eeb870d9?Expires=1693180800&Signature=Xcaa28TGURZidDdnFfGvJ2DxWeArQqDBmsQeTdHn5Bdt15J0lldqOmC-H2QJF-4Zjabn3RLnz71pxMjrdajL00zjOVCGDlourzk46lbOxGdDd9AtOflI9ZnUvwK~9ZUflJQP9esKMioKfG916XxpyT16so5CYelYOl-JwLOLwRh6hK5J9IoQ9GXk9oR~mh6nJhFJZS60zyw65-rKdphJHQJvBb1C6Vg9QyCheowsWBGIEbYq5p9DgDvE6Fs5wMxlcRlVgQ2gYQvy-6RubxYGEEirZ4heGjskrmmsHelm6uEj3yZhl3sozJoKGA6sKZYbqHzpJUEMZuxa2pfVHZPiXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <h1>Mara Pérez 🦋</h1>
                    <span>@mara_pg</span>
                </div>
                <div className="perfil-mis-playlists-container">
                    <h3 className="perfil-crear-playlists-h3">Mis Playlists</h3>
                    <button className="perfil-crear-playlists-button">Crear Playlists</button>
                </div>
                <div className="perfil-playlists-container">
                    <div className="perfil-playlist-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                    <div className="perfil-playlist-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                    <div className="perfil-playlist-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                    <div className="perfil-playlist-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                    <div className="perfil-playlist-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                    <div className="perfil-playlist-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                    <div className="perfil-playlist-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                    <div className="perfil-playlist-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                    <div className="perfil-playlist-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                    <div className="perfil-playlist-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                    <div className="perfil-playlist-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                    <div className="perfil-playlist-card"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><h3>Titulo</h3><h4>Artista</h4></div>
                </div>
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
        </>
    );
}

export default Perfil;