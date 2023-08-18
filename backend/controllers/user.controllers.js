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
    const { ocasion, animo, clima, generos } = req.body;
    // const { usuario } = req;
    // console.log({ ocasion, animo, clima, generos, usuario });

    let matchingTemas = await knex('temas_musicales')
      .where(function () {
        if (animo) {
          this.andWhere('animo', animo);
        }
        if (clima) {
          this.andWhere('clima', clima);
        }
        if (ocasion) {
          this.andWhere('ocasion', ocasion);
        }
      })
      .select('*');

    // console.log(matchingTemas)

    if (matchingTemas.length < 5) {
      matchingTemas = await knex('temas_musicales')
        .where(function () {
          if (animo) {
            this.andWhere('animo', animo);
          }
          if (ocasion) {
            this.andWhere('ocasion', ocasion);
          }
        })
        .select('*');
    }

    // console.log(matchingTemas)
    // console.log("termino")
    // console.log(usuario);

    const newPlaylist = {
      nombre: 'My Awesome Playlist',
      usuarios_id: req.usuario.id,
    };
    // console.log(newPlaylist);

    const playlistId = await knex('playlists')
      .insert(newPlaylist, 'id');

    const cancionesToInsert = matchingTemas.map(temaId => ({
      titulo_cancion: temaId.id,
      playlist_id: playlistId[0].id,
    }));

    // console.log(cancionesToInsert)

    if (cancionesToInsert) {
      await knex('canciones_playlist')
        .insert(cancionesToInsert);

    }
    // const canciones = await knex.select('*').from('playlists');
    res.json({
      playlistId: playlistId[0].id,
      canciones: matchingTemas.map(tema => (tema.id))
    });
  } catch (error) {
    console.error('Error al obtener las canciones:', error);
    res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
  }
};
