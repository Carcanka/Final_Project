import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CupidoMusical.css";
import Flecha from "../../assets/left-icon-placeholder.svg";
import Like from "../../assets/like.svg";
import Dislike from "../../assets/cross.svg";

function CupidoMusical() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [likedSongs, setLikedSongs] = useState([]);
  const [dislikedSongs, setDislikedSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/user/musica", {credentials: "include"});
      const json = await response.json();
      setSongs(json.canciones);
    };

    fetchData();
  }, []);

  const handleLike = () => {
    const likedSong = songs[currentSongIndex];
    setLikedSongs([...likedSongs, likedSong]);
    setCurrentSongIndex(currentSongIndex + 1);
  };

  const handleDislike = () => {
    const dislikedSong = songs[currentSongIndex];
    setDislikedSongs([...dislikedSongs, dislikedSong]);
    setCurrentSongIndex(currentSongIndex + 1);
  };
console.log(currentSongIndex);
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
              src="https://s3-alpha-sig.figma.com/img/8d43/dfbf/98017346dc1d5dfe56189d1607f3a9ac?Expires=1693180800&Signature=efCTJjIMZK34hS-Iw1pVhzRRW8NFTkQaUc43i7IDBiKRqfG6hG73aqTrjl6NrvwCAWNzptCeKYcj3lxNhJ5sBYKsq8bGVhZoyBCcLgk6VSjwUVIGkekaFVTq4JN65HjmiWqFUdLnWPOG-q06DjyJO8hcXkDQ4ac29gAozeigdGqKEQQa3wfbx1se2gSIi2-5pc3dD2F31XXNly4YxhPfczRGmIR18Ql1O-PGtpCiSxf1WvN5UcjNM~BZrJ1iMeHWsx3L9gwru5oZk3PGqsRjINhtlR5jUdrxl-eyYzQi3~e5Cvji1HTDd9Agn1eZwX9JQ2qEvV3JM94WehF0zadZxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
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
          <span className="hero-artist">{songs[currentSongIndex]?.artista}</span>
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

