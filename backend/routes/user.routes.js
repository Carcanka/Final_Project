const express = require("express");
const userRoutes = express.Router();
const { allCanciones, filtroGeneros, filtroArtista, filtroTitulo, filtroAnimo, filtroClima, filtroOcasion } = require("../controllers");
const { login, register } = require("../controllers/auth.controllers");
const mensaje = require ("../validators")
const schema = require ("../validators/user")

userRoutes.get("/musica", allCanciones);
userRoutes.get("/generos", filtroGeneros);
userRoutes.get("/artista", filtroArtista);
userRoutes.get("/titulo", filtroTitulo);
userRoutes.get("/animo", filtroAnimo);
userRoutes.get("/clima", filtroClima);
userRoutes.get("/ocasion", filtroOcasion);

module.exports = userRoutes;