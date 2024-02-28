/* eslint-disable no-unused-vars */
import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import manipuladorDeErro from "../middlewares/manipuladorDeErros.js";
const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), livros, autores);
  app.use(manipuladorDeErro);
};

export default routes;