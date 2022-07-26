import { Response, Request } from "express";
import { user } from "../../models";
import bcrypt from "bcryptjs";
import parseFile from "../parseFiles";
import path from "path";

const controller = {
  async cadastro(req: Request, res: Response) {
    const { email } = req.body;

    const existsEmail = await user.instance.count({ where: { email } });

    if (existsEmail) {
      return res.status(400).json("Email já cadastrado");
    }

    const hashPass = bcrypt.hashSync(req.body.senha, 10);

    const newUser = await user.instance.create({
      ...req.body,
      senha: hashPass,
    });

    return res.json(newUser);
  },

  async exibir(req: Request, res: Response) {
    const { id } = req.params;

    const userSaved = await user.instance.findByPk(id, {
      attributes: ["nome", "email"],
    });
    return res.json(userSaved);
  },

  async cadastroBatch(req: Request, res: Response) {
    const { file } = req;

    if (!file) {
      return res.status(400).json("Arquivo não enviado");
    }

    const listaUsuarios = parseFile(path.resolve("uploads", file?.filename));

    const listaCadastro = listaUsuarios.map((user: any) => {
      const newUser = {
        name: user.nome,
        email: user.email,
        senha: bcrypt.hashSync(user.senha.toString(), 10),
      };

      // return user.instance.create(newUser); //1000 requisições

      return newUser;
    });

    await user.instance.bulkCreate(listaCadastro); // 1 requisição

    return res.sendStatus(204);
  },
};

export default controller;
