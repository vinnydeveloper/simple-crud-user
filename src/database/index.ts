import Conection from "./Conection";
import ENV from "../infra/config/env";

const mySqlConection = new Conection(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASS, {
  dialect: "mysql",
  port: ENV.DB_PORT,
  host: ENV.DB_HOST,
});

export { mySqlConection };
