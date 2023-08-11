const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { knex } = require("../db");
// const { body } = require("express-validator");

const sendToken = (res, next, email, nombre) => {
  const token = jwt.sign({ email, nombre }, secret);
  res.json({ token });
  next();
};

const secret = "encriptado";
exports.secret = secret;
exports.register = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  await knex("usuarios").insert({ nombre:req.body.nombre, email:req.body.email, password_hash: hashPassword });

  sendToken(res, next, req.body.email, req.body.nombre);
};

exports.login = async (req, res, next) => {
  // const salt = await bcrypt.genSalt(10);
  const { email, password } = req.body;

  const respuestaUsuarios = await knex("usuarios").where("email", email);
  const usuario = respuestaUsuarios[0];

  if (!usuario) {
    res.status(404).json({ mensaje: "usuario incorrecto" });
    next();
    return;
  }
  console.log(usuario);
  const passwordValida = await bcrypt.compare(
    password,
    usuario.password_hash,
  );

  if (!passwordValida) {
    res.status(404).json({ mensaje: "password incorrecta" });
    next();
    return;
  }

  sendToken(res, next, email, usuario.nombre);
};