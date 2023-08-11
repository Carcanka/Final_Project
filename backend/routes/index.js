const express = require("express");
const routes = express.Router();
const { allCanciones, filtroGeneros, filtroArtista, filtroTitulo, filtroAnimo, filtroClima, filtroOcasion } = require("../controllers");
const { login, register } = require("../controllers/auth.controllers");
const mensaje = require ("../validators")
const schema = require ("../validators/user")

routes.get("/musica", allCanciones);
routes.get("/generos", filtroGeneros);
routes.get("/artista", filtroArtista);
routes.get("/titulo", filtroTitulo);
routes.get("/animo", filtroAnimo);
routes.get("/clima", filtroClima);
routes.get("/ocasion", filtroOcasion);

routes.get("/login", login);
routes.post("/register", schema, mensaje, register);

module.exports = routes;