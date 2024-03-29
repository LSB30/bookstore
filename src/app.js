/* eslint-disable no-unused-vars */
import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
const conexao = db;

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();

routes(app);


export default app;
