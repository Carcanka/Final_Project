import "./Playlist.css"
import Friends from "../../assets/friends.svg"
import HomeLogo from "../../assets/home.svg"
import Search from "../../assets/search.svg"
import User from "../../assets/user.svg"
import Flecha from "../../assets/left-icon-placeholder.svg"
import RightIcon from "../../assets/right-icon-placeholder.svg"
import NoSeQueEs from "../../assets/logo-small.svg"
import VerifiedLogo from "../../assets/verified.svg"
import Share from "../../assets/share.svg"
import History from "../../assets/Vector.svg"
import Copy from "../../assets/copy.svg"
import Shuffle from "../../assets/shuffle.svg"
import PlayButton from "../../assets/play-btn.svg"

import Imagen from "../../Portadas/Bachata_cover.jpg"

function Playlist() {
    return (
        <div className="main-container-header">
            <div className="header-gradient"></div>
            <div className="playlist-container">

                <div className="playlist-header">
                    <button className="playlist-header-button"><img src={Flecha} alt="Ir atrás" /></button>
                    <div className="playlist-header-text">
                        <span>Generada del Cupido Musical</span>
                        <h3>Playlist Generada</h3>
                    </div>
                    <button className="playlist-header-button"><img src={RightIcon} alt="" /></button>
                    <div></div>
                </div>

                <div className="playlist-image-container">
                    {/* <div className="playlist-image"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></div>
                    <div className="playlist-image"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></div>
                    <div className="playlist-image"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></div>
                    <div className="playlist-image"><img src="https://s3-alpha-sig.figma.com/img/d5c7/d566/fc87a0ec2aecfa854c52d3bd5552c631?Expires=1693180800&Signature=k9C6Yhllm8ZPMtGLQkqh1nTs~t3xgaEX~rqNqbVXItfP4AFdR6qTA~2kF7uN5ML3bIgxTx8tM1e0yBhxBaPlzMf7Le68rBmSnBEEKLShS~wO1tPPrG71hOHVVCQhl9fRew~KhimnPbWxz4mji3x7FRkKMbE9jn3TBNZx5KU76~GLfgxqYy4gonbak9VQ78OF2j4av6-xU0zJjcsqBQ5IGm-J5nwBANWaJ2VdKqNoUS6zb-Sn1~amhEyTCBAu3Ubl0ojHIdMRefjxhf3z84DLPnD0REd004sB6LEiKdhhyc5Sm4SSvunEs14-FaKgk75V5Q-WtIouy5O4bQW4ADkHEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></div> */}
                </div>
                <div className="playlist-info-container">
                    <div className="playlist-info">
                        <div className="playlist-info-icons-container">
                            <button className="playlist-info-icons"><img src={NoSeQueEs} alt="" /></button>
                            <button className="playlist-info-icons"><img src={VerifiedLogo} alt="" /></button>
                            <button className="playlist-info-icons"><img src={Share} alt="" /></button>
                        </div>
                        <div className="playlist-info-icons-container">
                            <span>1h 19m</span>
                            <button className="playlist-info-icons"><img src={History} alt="" /></button>
                        </div>
                    </div>
                    <div className="playlist-info">
                        <div className="playlist-info-icons-container">
                            <button className="playlist-info-icons"><img src={Copy} alt="" /></button>
                            <span>Crear Copia</span>
                        </div>
                        <div className="playlist-info-icons-container">
                            <button className="playlist-info-icons"><img src={Shuffle} alt="" /></button>
                            <button className="playlist-info-icons"><img src={PlayButton} alt="" /></button>
                        </div>
                    </div>
                </div>

                <div className="playlist-songs">
                    <div className="playlist-songs-details">
                        <img src={Imagen} alt="" width={50} height={50} />
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        <div className="playlist-songs-details-text">
                            <h5>Titulo de la cancion</h5>
                            <span>Nombre del artista</span>
                        </div>
                        <button className="playlist-songs-details-right-icon"><img src={RightIcon} alt="" /></button>
                    </div>
                    <div className="playlist-songs-details">
                        <img src={Imagen} alt="" width={50} height={50} />
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        <div className="playlist-songs-details-text">
                            <h5>Titulo de la cancion</h5>
                            <span>Nombre del artista</span>
                        </div>
                        <button className="playlist-songs-details-right-icon"><img src={RightIcon} alt="" /></button>
                    </div>
                    <div className="playlist-songs-details">
                        <img src={Imagen} alt="" width={50} height={50} />
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        <div className="playlist-songs-details-text">
                            <h5>Titulo de la cancion</h5>
                            <span>Nombre del artista</span>
                        </div>
                        <button className="playlist-songs-details-right-icon"><img src={RightIcon} alt="" /></button>
                    </div>
                    <div className="playlist-songs-details">
                        <img src={Imagen} alt="" width={50} height={50} />
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        <div className="playlist-songs-details-text">
                            <h5>Titulo de la cancion</h5>
                            <span>Nombre del artista</span>
                        </div>
                        <button className="playlist-songs-details-right-icon"><img src={RightIcon} alt="" /></button>
                    </div>
                    <div className="playlist-songs-details">
                        <img src={Imagen} alt="" width={50} height={50} />
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        <div className="playlist-songs-details-text">
                            <h5>Titulo de la cancion</h5>
                            <span>Nombre del artista</span>
                        </div>
                        <button className="playlist-songs-details-right-icon"><img src={RightIcon} alt="" /></button>
                    </div>
                    <div className="playlist-songs-details">
                        <img src={Imagen} alt="" width={50} height={50} />
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        {/* SACAR LO DE WIDTH Y HEIGH DE LA IMAGEN DE ARRIBA */}
                        <div className="playlist-songs-details-text">
                            <h5>Titulo de la cancion</h5>
                            <span>Nombre del artista</span>
                        </div>
                        <button className="playlist-songs-details-right-icon"><img src={RightIcon} alt="" /></button>
                    </div>
                </div>

                <div className="playlist-footer-container">
                    <button className="playlist-footer-container-item">
                        <img src={HomeLogo} alt="" />
                        <span>Inicio</span>
                    </button>
                    <button className="playlist-footer-container-item">
                        <img src={Search} alt="" />
                        <span>playlist</span>
                    </button>
                    <button className="playlist-footer-container-item">
                        <img src={User} alt="" />
                        <span>Perfil</span>
                    </button>
                    <button className="playlist-footer-container-item">
                        <img src={Friends} alt="" />
                        <span>Amigos</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Playlist;