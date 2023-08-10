const express = require("express");
const routes = express.Router();
const { allCanciones, filtroGeneros, filtroArtista, filtroTitulo, filtroAnimo, filtroClima, filtroOcasion } = require("../controllers");

routes.get("/musica", allCanciones);
routes.get("/generos", filtroGeneros);
routes.get("/artista", filtroArtista);
routes.get("/titulo", filtroTitulo);
routes.get("/animo", filtroAnimo);
routes.get("/clima", filtroClima);
routes.get("/ocasion", filtroOcasion);

module.exports = routes;