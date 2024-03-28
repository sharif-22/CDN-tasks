import express, { json } from "express";

import data from "./data/dummy.json" assert { type: "json" };

const expressServer = express();

const SERVER_PORT = 2024;

expressServer.get("/", (req, res) => {
  console.log(req, res);
});

expressServer.listen(SERVER_PORT, () =>
  console.log(`Listen to port ${SERVER_PORT}`)
);
