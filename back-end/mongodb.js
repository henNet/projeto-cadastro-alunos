import { MongoClient } from "mongodb";

var url =
  "mongodb+srv://henriquenetodev:ifceaulabd2@cluster0.lck0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function findAllDocuments() {
  const client = new MongoClient(url);
  try {
    const database = client.db("ifce");
    const alunos = database.collection("alunos");

    const result = await alunos.find();
    var finalData = await result.toArray();
    return finalData;
  } catch (e) {
      throw e;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function insertOne(dados) {
  const client = new MongoClient(url);
  try {
    const database = client.db("ifce");
    const alunos = database.collection("alunos");

    const aluno = await alunos.insertOne(dados);
    return aluno;
  } catch (e) {
    throw e;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export { findAllDocuments, insertOne };
