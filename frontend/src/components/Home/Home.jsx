import "./Home.css"
import History from "../../assets/Vector.svg"
import Bell from "../../assets/bell.svg"
import CupidoMusical from "../../assets/cupido-musical-illustration.svg"
import MusicalContextual from "../../assets/contextual-illustration.svg"

function Home() {
    return (
        <>
            <div className="header-container">
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
                            <h2>Cupido Musical</h2>
                            <p>Tus artistas favoritos nunca van a dejarte con el corazón roto.</p>
                        </div>
                    </div>
                    <div className="cupido-contextual-container">
                        <img src={MusicalContextual} alt="Música Contextual Logo" />
                        <div className="home-div-info">
                            <h2>Música Contextual</h2>
                            <p>Creamos la playlist perfecta para cualquier situación.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;