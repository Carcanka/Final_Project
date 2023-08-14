import "./Home.css"
import History from "../../assets/Vector.svg"
import Bell from "../../assets/bell.svg"
import CupidoMusical from "../../assets/cupido-musical-illustration.svg"
import MusicalContextual from "../../assets/contextual-illustration.svg"
import Friends from "../../assets/friends.svg"
import HomeLogo from "../../assets/home.svg"
import Search from "../../assets/search.svg"
import User from "../../assets/user.svg"

function Home() {
    return (
        <div className="main-container-header">
            <div className="header-gradient">
            </div>
            <div className="home-container">
                <div className="home-header">
                    <h1>Música ya</h1>
                    <div className="home-header-svg">
                        <button><img src={History} alt="Ver recientes" /></button>
                        <button><img src={Bell} alt="Campanita" /></button>
                    </div>
                </div>
                <div className="home-div">
                    <div className="cupido-contextual-container">
                        <img src={CupidoMusical} alt="Cupido Musical Logo" />
                        <div className="home-div-info">
                            <h3 className="home-div-info-margin">Cupido Musical</h3>
                            <p>Tus artistas favoritos nunca van a dejarte con el corazón roto.</p>
                        </div>
                    </div>
                    <div className="cupido-contextual-container">
                        <img src={MusicalContextual} alt="Música Contextual Logo" />
                        <div className="home-div-info">
                            <h3 className="home-div-info-margin">Música Contextual</h3>
                            <p>Creamos la playlist perfecta para cualquier situación.</p>
                        </div>
                    </div>
                    <div className="home-footer-container">
                        <button className="home-footer-container-item">
                            <img src={HomeLogo} alt="" />
                            <span>Inicio</span>
                        </button>
                        <button className="home-footer-container-item">
                            <img src={Search} alt="" />
                            <span>Buscador</span>
                        </button>
                        <button className="home-footer-container-item">
                            <img src={User} alt="" />
                            <span>Perfil</span>
                        </button>
                        <button className="home-footer-container-item">
                            <img src={Friends} alt="" />
                            <span>Amigos</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer-container">
            </div>
        </div>
    )
}

export default Home;