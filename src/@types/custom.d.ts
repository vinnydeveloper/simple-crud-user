type User = {
  id: number;
  name: string;
  email: string;
  nivel: number;
};

declare namespace Express {
  export interface Request {
    user?: User;
  }
}
