const knex = require("knex")({
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: "Revolucion10/12",
      database: "proyecto_final",
    //   ssl: true,
    //   sslmode: 'verify-full'
    },
  });
  
  module.exports = { knex };

  