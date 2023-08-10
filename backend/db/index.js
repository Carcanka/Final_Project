const knex = require("knex")({
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: "Revolucion10/12",
      database: "postgres",
    //   ssl: true,
    //   sslmode: 'verify-full'
    },
  });
  
  module.exports = { knex };

  