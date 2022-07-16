import "dotenv/config";
import App from "./infra/App";

const app = new App();

const port = process.env.PORT ? (process.env.PORT as unknown as number) : 4000;
app.setup({ port });
