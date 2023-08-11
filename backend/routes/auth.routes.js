const express = require("express");
const authRoutes = express.Router();
const { login, register } = require("../controllers/auth.controllers");
const mensaje = require ("../validators")
const schema = require ("../validators/user")

authRoutes.post("/login", login);
authRoutes.post("/register", schema, mensaje, register);

module.exports = authRoutes;

// const response = await fetch('/api/some-protected-route', {
//     method: 'GET',
//     credentials: 'include', // Important: Include credentials (cookies)
//   });