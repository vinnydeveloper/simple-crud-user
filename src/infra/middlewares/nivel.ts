import { Request, Response, NextFunction } from "express";

export default function nivel(nivelList: number[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (typeof req.user?.nivel === "undefined") {
      return res.status(401).json("Sem nivel de acesso");
    }

    if (!nivelList.includes(req.user?.nivel)) {
      return res.status(401).json("Sem nivel de acesso");
    }

    return next();
  };
}
