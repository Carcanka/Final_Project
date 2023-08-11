import "./CupidoMusical.css"
import Flecha from "../../assets/left-icon-placeholder.svg"


function CupidoMusical() {
    return (
        <>
            <div className="cupido-musical-container">
                <div className="header-gradient">
                </div>
                <div className="cupido-musical-header">
                    <button><img src={Flecha} alt="Ir atrás" /></button>
                    <h3>Cupido Musical</h3>
                    <div></div>
                </div>
                <form action="">
                    <input type="submit" className="cupido-musical-submit" value="Crear Playlist" />
                </form>
            </div>

        </>
    );
}

export default CupidoMusical;