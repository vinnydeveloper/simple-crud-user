import { DataTypes } from "sequelize";
import NIVEL_USER from "../constants/nivelUser";
import Conection from "../database/Conection";

export class User {
  instance: any;
  modelName: string = "Users";

  constructor(conexao: Conection) {
    const con = conexao.getInstance();

    this.instance = con.define(
      this.modelName,
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nivel: {
          type: DataTypes.INTEGER,
          defaultValue: NIVEL_USER.USER,
        },
        name: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        senha: {
          type: DataTypes.STRING(300),
        },
        hashResetSenha: {
          type: DataTypes.STRING(300),
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}
