import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import { user } from "../../models";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

import logger from "../../infra/logger";
const controller = {
  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const targetUser = await user.instance.findOne({
      where: {
        email,
      },
    });

    if (!targetUser) {
      return res.status(400).json("Email não cadastrado!");
    }

    if (!bcrypt.compareSync(senha, targetUser.senha)) {
      return res.status(401).json("Senha invalida!");
    }

    const token = jwt.sign(
      {
        id: targetUser.id,
        email: targetUser.email,
        nome: targetUser.name,
        nivel: targetUser.nivel,
      },
      "CRUDGAMA"
    );

    return res.json(token);
  },

  async gerarTokenDeSenha(req: Request, res: Response) {
    logger.info(
      `[gerarTokenDeSenha] start function body=${JSON.stringify(
        req.body
      )} client_ip=${req.ips}`
    );
    const { email } = req.body;

    const savedUser = await user.instance.findOne({
      where: {
        email,
      },
    });

    if (!savedUser) {
      logger.error(`[gerarTokenDeSenha] user not found`);
      return res.status(404).json("Email não encontrado");
    }
    logger.log("nivel", "mensagem");
    logger.info(`[gerarTokenDeSenha] user = ${JSON.stringify(savedUser)}`);

    const token = CryptoJS.AES.encrypt(
      `${savedUser.email}`,
      "GAMACRUD"
    ).toString();
    // enviar um email com o token
    savedUser.hashResetSenha = token;

    await savedUser.save();
    logger.info(`[gerarTokenDeSenha] finish function`);
    return res.json(token);
  },

  async recuperarSenha(req: Request, res: Response) {
    logger.info(
      `[recuperarSenha] start function body = ${JSON.stringify(req.body)}`
    );
    const { token, senha } = req.body;

    const bytes = CryptoJS.AES.decrypt(token, "GAMACRUD");
    const email = bytes.toString(CryptoJS.enc.Utf8);

    if (!email) {
      logger.error(`[recuperarSenha] token invalido, pois não existe o email`);
      return res.status(400).json("token invalido");
    }

    const savedUser = await user.instance.findOne({
      where: {
        email,
      },
    });

    if (!savedUser) {
      logger.error(`[recuperarSenha] Email não encontrado email= ${email}`);
      return res.status(404).json("Email não encontrado");
    }

    if (!savedUser.hashResetSenha || savedUser.hashResetSenha !== token) {
      logger.error(
        `[recuperarSenha] Token diferente ou não existe no banco de dados`
      );
      return res.status(400).json("token invalido");
    }

    if (bcrypt.compareSync(senha, savedUser.senha)) {
      return res.status(400).json("Senha ja utilizada");
    }

    const newSenha = bcrypt.hashSync(senha, 10);

    savedUser.senha = newSenha;

    savedUser.hashResetSenha = null;

    await savedUser.save();
    logger.info(`[recuperarSenha] finalizando a função com a senha alterada`);

    return res.sendStatus(201);
  },
};

export default controller;
