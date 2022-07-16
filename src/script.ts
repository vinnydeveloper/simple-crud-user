import { QueryTypes } from "sequelize";
import { mySqlConection } from "./database";

const db = mySqlConection.getInstance();

db.query("SELECT name FROM users LIMIT 10", {
  type: QueryTypes.SELECT,
}).then((response) => console.log(response));
