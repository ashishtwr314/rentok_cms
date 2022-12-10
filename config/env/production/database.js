// const fs = require("fs");
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env(
//         "DATABASE_HOST",
//         "db-postgresql-blr1-87334-do-user-8535847-0.b.db.ondigitalocean.com"
//       ),
//       port: env.int("DATABASE_PORT", 25060),
//       database: env("DATABASE_NAME", "defaultdb"),
//       user: env("DATABASE_USERNAME", "doadmin"),
//       password: env("DATABASE_PASSWORD", "AVNS_f9ny2EdaAf3gSsJH99a"),
//       ssl: {
//         ca: fs.readFileSync(`${__dirname}/ca_cert.crt`).toString(),
//       },
//       // schema: env("DATABASE_SCHEMA", "public"), // Not required
//       // ssl: {
//       //   ca: env("DATABASE_CA"),
//       //   // rejectUnauthorized: false,
//       // },
//     },
//     debug: false,
//     acquireConnectionTimeout: 300000,
//   },
// });

const fs = require("fs");
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "db-postgresql-blr1-87334-do-user-8535847-0.b.db.ondigitalocean.com",

      port: 25060,
      database: "defaultdb",
      user: "doadmin",
      password: "AVNS_f9ny2EdaAf3gSsJH99a",
      ssl: {
        ca: fs.readFileSync(`${__dirname}/ca_cert.crt`).toString(),
      },
    },
    debug: false,
    acquireConnectionTimeout: 300000,
  },
});
