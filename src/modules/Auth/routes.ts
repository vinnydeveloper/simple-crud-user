import { Router } from "express";
import controller from "./controller";
const routes = Router();

routes.post("/login", controller.login);
routes.post("/reset-senha", controller.gerarTokenDeSenha);
routes.post("/recuperar-senha", controller.recuperarSenha);

export default routes;
