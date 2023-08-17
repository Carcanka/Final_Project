const { knex } = require("../db");
const { matchedData } = require("express-validator");

const TABLA_USUARIOS = "usuarios";



exports.getAllUsers = async (req, res, next) => {
  let result;
  if (req.query.nombre) {
    result = await knex(TABLA_USUARIOS).where(
      "nombre",
      "like",
      `%${req.query.nombre}%`
    );
  } else {
    result = await knex(TABLA_USUARIOS).select().orderByRaw("random()");
  }

  res.json(result);
  next();
};

exports.getUser = async (req, res, next) => {
  //   const respuestaBd = await knex(TABLA_USUARIOS).where("id", req.params.id);

  const respuestaBd = await knex(TABLA_USUARIOS).where({
    email: req.usuario.email,
  });

  const usuario = respuestaBd[0];
  if (usuario) {
    res.status(201);
    res.json(respuestaBd[0]);
  } else {
    res.status(404);
    res.json({ mensaje: "no se encontró el usuario con ese id" });
  }
  next();
};

exports.createUser = async (req, res, next) => {
  const newUser = matchedData(req);
  try {
    const respuestaBd = await knex(TABLA_USUARIOS).insert(newUser, "*");
    res.status(201);
    res.json(respuestaBd[0]);
  } catch (e) {
    res.status(500);
    res.json(e);
  }
  next();
};
exports.playlist = async (req, res) => {
  try {
    const canciones = await knex.select('*').from('playlists');
    res.json({ canciones });
  } catch (error) {
    console.error('Error al obtener las canciones:', error);
    res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
  }
};

//definir la ruta para crear la playlist, recorrer req.body para recibir esa data, obtener las canciones en array e insertarlas en plylist.songs/