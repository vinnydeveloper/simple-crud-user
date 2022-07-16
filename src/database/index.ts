import Conection from "./Conection";
import ENV from "../infra/config/env";

const postgres = ENV.DB_DIALECT === "postgres" ? "postgres" : "postgres";

const mySqlConection = new Conection(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASS, {
  dialect: ENV.DB_DIALECT ? postgres : "mysql",
  port: ENV.DB_PORT,
  host: ENV.DB_HOST,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export { mySqlConection };
