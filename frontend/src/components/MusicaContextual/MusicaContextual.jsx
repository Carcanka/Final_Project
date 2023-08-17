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
                            <option value="fiesta">Fiesta</option>
                            <option value="amor">Amor</option>
                            <option value="viaje">Viaje</option>
                            <option value="concierto">Concierto</option>
                            <option value="reflexion">Reflexión</option>
                            <option value="tristeza">Tristeza</option>
                            <option value="diversion">Diversión</option>
                            <option value="relax">Relax</option>
                        </select>
                    </div>

                    <div className="input-container">
                        <h2>¿Cómo te sientes?</h2>
                        <select id="animo">
                            <option value="">Estado de Ánimo</option>
                            <option value="energetico">Energético</option>
                            <option value="emocionante">Emocionante</option>
                            <option value="animado">Animado</option>
                            <option value="reflejo">Reflejo</option>
                            <option value="romantico">Romántico</option>
                            <option value="relajado">Relajado</option>
                            <option value="melancolico">Melancólico</option>
                            <option value="empoderado">Empoderado</option>
                            <option value="feliz">Feliz</option>
                            <option value="triste">Triste</option>
                            <option value="epico">Épico</option>
                            <option value="reflexivo">Reflexivo</option>
                            <option value="romantico">Romántico</option>
                        </select>

                    </div>

                    <div className="input-container">
                        <h2>¿Cómo está el clima?</h2>
                        <select id="clima">
                            <option value="">Clima</option>
                            <option value="soleado">Soleado</option>
                            <option value="lluvioso">Lluvioso</option>
                            <option value="1">1</option>
                            <option value="nublado">Nublado</option>
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
