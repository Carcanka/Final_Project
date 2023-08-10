const { knex } = require("../db");


  exports.allCanciones = async (req, res) => {
    try {
      const canciones = await knex.select('*').from('temas_musicales');
      res.json({ canciones });
    } catch (error) {
      console.error('Error al obtener las canciones:', error);
      res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
    }
  };

  exports.filtroGeneros = async (req, res) => {
    try {
      const canciones = await knex.select('nombre').from('generos_musicales');
      res.json({ canciones });
    } catch (error) {
      console.error('Error al obtener las canciones:', error);
      res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
    }
  };

  exports.filtroArtista = async (req, res) => {
    try {
      const canciones = await knex.select('artista').from('temas_musicales');
      res.json({ canciones });
    } catch (error) {
      console.error('Error al obtener las canciones:', error);
      res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
    }
  };

  exports.filtroTitulo = async (req, res) => {
    try {
      const canciones = await knex.select('titulo').from('temas_musicales');
      res.json({ canciones });
    } catch (error) {
      console.error('Error al obtener las canciones:', error);
      res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
    }
  };

  exports.filtroAnimo = async (req, res) => {
    try {
      const canciones = await knex.select('animo').from('temas_musicales');
      res.json({ canciones });
    } catch (error) {
      console.error('Error al obtener las canciones:', error);
      res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
    }
  };

  exports.filtroClima = async (req, res) => {
    try {
      const canciones = await knex.select('clima').from('temas_musicales');
      res.json({ canciones });
    } catch (error) {
      console.error('Error al obtener las canciones:', error);
      res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
    }
  };

  exports.filtroOcasion = async (req, res) => {
    try {
      const canciones = await knex.select('ocasion').from('temas_musicales');
      res.json({ canciones });
    } catch (error) {
      console.error('Error al obtener las canciones:', error);
      res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
    }
  };


  //test//

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
	@@ -21,7 +21,10 @@ exports.getAllUsers = async (req, res, next) => {

exports.getUser = async (req, res, next) => {
  //   const respuestaBd = await knex(TABLA_USUARIOS).where("id", req.params.id);

  const respuestaBd = await knex(TABLA_USUARIOS).where({
    email: req.usuario.email,
  });

  const usuario = respuestaBd[0];
  if (usuario) {
	@@ -35,7 +38,7 @@ exports.getUser = async (req, res, next) => {
};

exports.createUser = async (req, res, next) => {
  const newUser = matchedData(req);
  try {
    const respuestaBd = await knex(TABLA_USUARIOS).insert(newUser, "*");
    res.status(201);