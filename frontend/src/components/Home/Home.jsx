import "./Home.css"
import History from "../../assets/Vector.svg"
import Bell from "../../assets/bell.svg"
import CupidoMusical from "../../assets/cupido-musical-illustration.svg"
import MusicalContextual from "../../assets/contextual-illustration.svg"
// import Friends from "../../assets/friends.svg"
// import HomeLogo from "../../assets/home.svg"
// import Search from "../../assets/search.svg"
// import User from "../../assets/user.svg"

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
                    <div className="home-footer-container">
                        aaaaa
                    </div>
                </div>
            </div>
            <div className="footer-container">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore corporis minima! Accusamus et perferendis molestiae ad numquam vitae. Atque possimus minus at in adipisci incidunt pariatur libero, impedit quo?
                Nisi est, architecto et odit voluptatibus doloribus aliquam veritatis, accusantium consequatur aperiam rerum, blanditiis dicta adipisci iusto quidem id voluptas quibusdam natus officiis harum fugiat enim temporibus. Ex, porro et.
            </div>
        </>
    )
}

export default Home;