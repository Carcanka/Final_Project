const express = require("express");
const userRoutes = express.Router();
const { allCanciones, filtroGeneros, filtroArtista, filtroTitulo, filtroAnimo, filtroClima, filtroOcasion } = require("../controllers");

userRoutes.get("/musica", allCanciones);
userRoutes.get("/generos", filtroGeneros);
userRoutes.get("/artista", filtroArtista);
userRoutes.get("/titulo", filtroTitulo);
userRoutes.get("/animo", filtroAnimo);
userRoutes.get("/clima", filtroClima);
userRoutes.get("/ocasion", filtroOcasion);

module.exports = userRoutes;