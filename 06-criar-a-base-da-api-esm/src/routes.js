//const { Router } = require("express");
import { Router } from 'express';

const routes = new Router();

// rotas
routes.get("/", (req, res) => {
  res.send("Página inicial");
});

routes.get("/contatos", (req, res) => {
  res.send("Daniel, Leandro, Júlia, ...");
});

//module.exports = routes;
export default routes;