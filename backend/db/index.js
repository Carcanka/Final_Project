const knex = require("knex")({
    client: "pg",
    connection: {
      host: "ep-shrill-waterfall-99261634.us-east-2.aws.neon.tech",
      port: 5432,
      user: "Carcanka",
      password: "ADiNJZQ6s5Yf",
      database: "proyecto_final",
      ssl: true,
      sslmode: 'verify-full'
    },
  });
  
  module.exports = { knex };

  