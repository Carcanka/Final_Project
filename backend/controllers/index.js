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
      const canciones = await knex.select('*').from('artistas');
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
      const canciones = await knex.select('*').from('animos');
      res.json({ canciones });
    } catch (error) {
      console.error('Error al obtener las canciones:', error);
      res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
    }
  };

  exports.filtroClima = async (req, res) => {
    try {
      const canciones = await knex.select('*').from('climas');
      res.json({ canciones });
    } catch (error) {
      console.error('Error al obtener las canciones:', error);
      res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
    }
  };

  exports.filtroOcasion = async (req, res) => {
    try {
      const canciones = await knex.select('*').from('ocasiones');
      res.json({ canciones });
    } catch (error) {
      console.error('Error al obtener las canciones:', error);
      res.status(500).json({ error: 'Hubo un error al obtener las canciones.' });
    }
  };