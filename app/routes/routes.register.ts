import { Application, json, Request, Response, NextFunction } from "express";
import { routes } from "./routes.data";
import { Response as ResponseHandler } from "../utility/Response-handler";
import cors from 'cors';
import  express  from "express";
const path = require('path');
export const routesRegister = (app: Application) => {


 // console.log(path.join(__dirname, "..","..","../FRONTEND"))
   const staticPath = path.join(path.join(__dirname, "..","..","../FRONTEND"));
   app.use(express.static(staticPath));

  app.use(json());

  app.use(cors());

  for (let route of routes) {
    app.use(route.path, route.router);
  }

  app.use((response: any, req: Request, res: Response, next: NextFunction) => {
    return res
      .status(response.statusCode || 500)
      .send(new ResponseHandler(null, response));
  });
};
