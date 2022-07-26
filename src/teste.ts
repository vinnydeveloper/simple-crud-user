import parseFile from "./modules/parseFiles";
import path from "path";
import { user } from "./models";
const listaUsuarios = parseFile(path.resolve("usuarios.xlsx"));

const map = listaUsuarios.map((user: any) => {
  const obj = {
    name: user.nome,
    email: user.email,
    senha: user.senha,
  };

  return obj;
});

//TESTE
user.instance.bulkCreate(map).then((result: any) => console.log(result));
