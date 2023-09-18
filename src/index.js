import express from "express";
import "dotenv/config";
import { conectarDB } from "./database.js";


import { userRouter } from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use(userRouter)

app.listen(
  3000,
  () => {
    console.log("Servidor correindo en la oerieto 300");
  },
  conectarDB()
);
