import { Router } from "express";
import NIVEL_USER from "../../constants/nivelUser";
import auth from "../../infra/middlewares/auth";
import nivel from "../../infra/middlewares/nivel";

import upload from "../../infra/middlewares/upload";
import controller from "./controller";
const routes = Router();

routes.post("/cadastro", controller.cadastro);
routes.get(
  "/usuario/:id",
  auth,
  nivel([NIVEL_USER.ADMIN, NIVEL_USER.USER]),
  controller.exibir
);

routes.post("/cadastro/batch", upload.single("file"), controller.cadastroBatch);

export default routes;
