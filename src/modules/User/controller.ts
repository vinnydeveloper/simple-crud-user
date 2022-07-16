import { Response, Request } from "express";
import { user } from "../../models";
import bcrypt from "bcryptjs";
import parseFile from "../parseFiles";
import path from "path";

const controller = {
  async cadastro(req: Request, res: Response) {
    const hashPass = bcrypt.hashSync(req.body.senha, 10);

    const newUser = await user.instance.create({
      ...req.body,
      senha: hashPass,
    });

    return res.json(newUser);
  },

  async exibir(req: Request, res: Response) {
    const { id } = req.params;

    const userSaved = await user.instance.findByPk(id);
    return res.json(userSaved);
  },

  async cadastroBatch(req: Request, res: Response) {
    const { file } = req;

    if (!file) {
      return res.status(400).json("Arquivo não enviado");
    }

    const listaUsuarios = parseFile(path.resolve("uploads", file?.filename));

    const map = listaUsuarios.map((user: any) => {
      const obj = {
        name: user.nome,
        email: user.email,
        senha: bcrypt.hashSync(user.senha.toString(), 10),
      };

      return obj;
    });

    await user.instance.bulkCreate(map);

    return res.sendStatus(204);
  },
};

export default controller;
