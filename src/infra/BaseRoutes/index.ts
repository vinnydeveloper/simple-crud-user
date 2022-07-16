import { Router, Response, Request } from "express";

import userRoutes from "../../modules/User/routes";
import authRoutes from "../../modules/Auth/routes";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json("Api rodando corretamente");
});
routes.use(userRoutes);
routes.use(authRoutes);

export default routes;
