import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import {events} from "./events";
require("dotenv").config();
dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
app.get("/status", (req: Request, res: Response) => {
    res.json({
        stauts: "OK"
    });
});

//events();
export default app;
