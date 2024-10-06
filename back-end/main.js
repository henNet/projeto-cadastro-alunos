import express from "express";
import { rotaInserir, rotaPadrao } from "./rotas.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", rotaPadrao);
app.post("/inserir", rotaInserir);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
