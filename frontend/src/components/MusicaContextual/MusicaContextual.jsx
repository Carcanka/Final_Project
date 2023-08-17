import "./MusicaContextual.css"
import Flecha from "../../assets/left-icon-placeholder.svg"
import { Link } from 'react-router-dom';


function MusicaContextual() {
    const genres = [
        { id: 1, name: 'Rock' },
        { id: 2, name: 'Pop' },
        { id: 3, name: 'Hip Hop' },
        { id: 4, name: 'Electrónica' },
        { id: 5, name: 'R&B' },
        { id: 6, name: 'Reggae' },
        { id: 7, name: 'Jazz' },
        { id: 8, name: 'Clásica' },
        { id: 9, name: 'Country' },
        { id: 10, name: 'Blues' },
        { id: 11, name: 'Metal' },
        { id: 12, name: 'Folk' },
        { id: 13, name: 'Soul' },
        { id: 14, name: 'Funk' },
        { id: 15, name: 'Reggaetón' },
        { id: 16, name: 'Cumbia' },
        { id: 17, name: 'Salsa' },
        { id: 18, name: 'Bachata' }
    ];
    return (
        <>
            <div className="musica-contextual-container">
                <div className="header-gradient"></div>
                <div className="musica-contextual-header">
                    <Link to="/home">
                        <button><img src={Flecha} alt="Ir atrás" /></button>
                    </Link>
                    <h3>Musica Contextual</h3>
                    <div></div>
                </div>
                <form action="">
                    <div className="input-container">
                        <h2>¿Cuál es la ocasión?</h2>
                        <select id="ocasion">
                            <option value="">Actividad</option>
                            <option value="1">Fiesta</option>
                            <option value="2">Amor</option>
                            <option value="3">Viaje</option>
                            <option value="4">Concierto</option>
                            <option value="5">Reflexión</option>
                            <option value="6">Tristeza</option>
                            <option value="7">Diversión</option>
                            <option value="8">Relax</option>
                            <option value="9">Ciudad</option>
                            <option value="10">Entrenamiento</option>
                            <option value="11">Cannabis</option>
                            <option value="12">Playa</option>
                            <option value="13">Revolución</option>
                            <option value="14">Esperanza</option>
                            <option value="15">Naturaleza</option>
                        </select>
                    </div>

                    <div className="input-container">
                        <h2>¿Cómo te sientes?</h2>
                        <select id="animo">
                            <option value="">Estado de Ánimo</option>
                            <option value="1">Energético</option>
                            <option value="2">Emocionante</option>
                            <option value="3">Animado</option>
                            <option value="4">Romántico</option>
                            <option value="5">Relajado</option>
                            <option value="6">Melancólico</option>
                            <option value="7">Empoderado</option>
                            <option value="8">Feliz</option>
                            <option value="9">Épico</option>
                            <option value="10">Reflexivo</option>
                            <option value="11">Motivador</option>
                        </select>

                    </div>

                    <div className="input-container">
                        <h2>¿Cómo está el clima?</h2>
                        <select id="clima">
                            <option value="">Clima</option>
                            <option value="1">Soleado</option>
                            <option value="2">Lluvioso</option>
                            <option value="3">Noche</option>
                        </select>

                    </div>

                    <div className="input-container">
                        <h2>Selecciona hasta 3 géneros</h2>

                    </div>
                    <div className="inputs-generos">
                        <div className="container-generos">
                            {genres.map(genre => (
                                <button key={genre.id} value={genre.id} className="genre-button">
                                    {genre.name}
                                </button>
                            ))}
                        </div>
                    </div>


                    <input type="submit" className="musica-contextual-submit" value="Crear Playlist" />
                </form>
            </div>

        </>
    );
}

export default MusicaContextual;
