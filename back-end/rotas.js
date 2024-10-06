import { findAllDocuments, insertOne } from "./mongodb.js";

async function rotaPadrao(requisicao, resposta) {
  const dados = await findAllDocuments();
  resposta.json(dados);
}

async function rotaInserir(requisicao, resposta) {
  console.log(requisicao.body.matricula);
  console.log(requisicao.body.nome);
  console.log(requisicao.body.idade);

  const dados = {
    matricula: requisicao.body.matricula,
    nome: requisicao.body.nome,
    idade: requisicao.body.idade,
  };
  const resultado = await insertOne(dados);
  resposta.json(resultado);
}

export { rotaPadrao, rotaInserir };
