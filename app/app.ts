import express from "express";
import { routesRegister } from "./routes/routes.register";
export const startServer = () => {
  const app = express();

  // console.log(path.join(__dirname, ".."))
  // app.use();

  routesRegister(app);

  const { PORT } = process.env;

  app.listen(PORT, () => console.log(`SERVER IS LISTENING ON PORT ${PORT}`));
};
