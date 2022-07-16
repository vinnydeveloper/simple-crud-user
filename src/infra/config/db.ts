import ENV from "./env";

const db = {
  username: ENV.DB_USER,
  password: ENV.DB_PASS,
  database: ENV.DB_NAME,
  host: ENV.DB_HOST,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

console.log(db);

module.exports = db;
