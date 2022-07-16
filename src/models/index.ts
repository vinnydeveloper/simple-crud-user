import { mySqlConection } from "../database";
import { User } from "./User";

const user = new User(mySqlConection);
export { user };
