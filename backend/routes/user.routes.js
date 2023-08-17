const express = require("express");
const userRoutes = express.Router();
const { allCanciones, filtroGeneros, filtroArtista, filtroTitulo, filtroAnimo, filtroClima, filtroOcasion} = require("../controllers");
const { playlist } = require("../controllers/user.controllers");

userRoutes.get("/musica", allCanciones);
userRoutes.get("/generos", filtroGeneros);
userRoutes.get("/artista", filtroArtista);
userRoutes.get("/titulo", filtroTitulo);
userRoutes.get("/animo", filtroAnimo);
userRoutes.get("/clima", filtroClima);
userRoutes.get("/ocasion", filtroOcasion);
userRoutes.post("/playlist", playlist);
module.exports = userRoutes;