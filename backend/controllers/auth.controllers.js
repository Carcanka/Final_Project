const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { knex } = require("../db");
// const { body } = require("express-validator");

const sendToken = (res, next, { id, email, nombre }) => {
  const token = jwt.sign({ email, nombre, id }, secret);
  res.cookie("authToken", token, { httpOnly: true, secure: false });
  res.status(200);
  res.json({ mensaje: "Ingreso de usuario correcto" });
};

const secret = "encriptado";
exports.secret = secret;
exports.register = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const usuario = await knex("usuarios")
    .insert({ ...req.body, password: hashPassword })
    .returning("*");
  sendToken(res, next, usuario[0]);
};

exports.login = async (req, res, next) => {
  // const salt = await bcrypt.genSalt(10);//
  const { email, password } = req.body;
  const respuestaUsuarios = await knex("usuarios").where("email", email);
  const usuario = respuestaUsuarios[0];
  const monedita = null;
  if (usuario) {
    if (bcrypt.compareSync(password, usuario.password_hash)) {
      sendToken (res, next, usuario);
      
    }
  }

  if (!usuario) {
    res.status(404).json({ mensaje: "usuario incorrecto" });
    next();
    return;
  }
  const passwordValida = bcrypt.compare(password, usuario.password_hash);

  if (!passwordValida) {
    res.status(404).json({ mensaje: "password incorrecta" });
    next();
    return;
  }  
};
