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
//       // schema: env("DATABASE_SCHEMA", "public"), // Not required
//       ssl: {
//         rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
//       },
//     },
//     debug: false,
//     acquireConnectionTimeout: 300000,
//   },
// });

// const path = require("path");

// module.exports = ({ env }) => ({
//   connection: {
//     client: "sqlite",
//     connection: {
//       filename: path.join(
//         __dirname,
//         "..",
//         env("DATABASE_FILENAME", ".tmp/data.db")
//       ),
//     },
//     useNullAsDefault: true,
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "database-1.cqfiotqwxeci.ap-south-1.rds.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "AVNS_f9ny2EdaAf3gSsJH99a"),
    },
    useNullAsDefault: true,
  },
});
