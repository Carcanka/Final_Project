import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CupidoMusical.css";
import Flecha from "../../assets/left-icon-placeholder.svg";
import Like from "../../assets/like.svg";
import Dislike from "../../assets/cross.svg";

function CupidoMusical() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [likedSongs, setLikedSongs] = useState([]);
  const [dislikedSongs, setDislikedSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/user/musica", {
          credentials: "include",
        });
        const json = await response.json();
        setSongs(json.canciones);
        setCurrentSongIndex(Math.floor(Math.random() * json.canciones.length));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLike = () => {
    const likedSong = songs[currentSongIndex];
    setLikedSongs([...likedSongs, likedSong]);
    setCurrentSongIndex(getNextSongIndex());
  };

  const handleDislike = () => {
    const dislikedSong = songs[currentSongIndex];
    setDislikedSongs([...dislikedSongs, dislikedSong]);
    setCurrentSongIndex(getNextSongIndex());
  };

  const getNextSongIndex = () => {
    let nextIndex = currentSongIndex + 1;
    if (nextIndex >= songs.length) {
      nextIndex = 0;
    }
    return nextIndex;
  };

  return (
    <>
      <div className="cupido-musical-container">
        <div className="cupido-musical-header">
          <div className="header-gradient"></div>
          <Link to={"/home"}>
            <img src={Flecha} alt="Ir atrás" />
          </Link>
          <h3>Cupido Musical</h3>
          <div></div>
        </div>
        <div className="cupido-musical-image-like-dislike">
          <div className="cupido-musical-image">
            <img
              src={new URL(
                `../../artistas/${songs[currentSongIndex]?.artista_id}.jpg`,
                import.meta.url
              )}
              alt="imagen musical"
            />
          </div>
          <div className="like-cross-container">
            <div className="like">
              <button onClick={handleLike}>
                <img src={Like} alt="Like" />
              </button>
            </div>
            <div className="cross">
              <button onClick={handleDislike}>
                <img src={Dislike} alt="Dislike" />
              </button>
            </div>
          </div>        
          <span className="hero-artist">{songs[currentSongIndex]?.nombre_artista}</span>
          <span className="hero-artist">{songs[currentSongIndex]?.titulo}</span>          
        </div>
        <form action="">
          <input
            type="submit"
            className="cupido-musical-submit"
            value="Crear Playlist"
          />
        </form>
      </div>
    </>
  );
}

export default CupidoMusical;

