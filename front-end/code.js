async function mostrarTodosAlunos() {
  var todosAlunos = document.querySelector(".todosAlunos");

  var resposta = await fetch("http://localhost:3000/");
  var dados = await resposta.json();

  todosAlunos.innerHTML = "";

  for (i = 0; i < dados.length; i++) {
    var aluno = document.createElement("div");
    aluno.classList.add("aluno");

    aluno.innerHTML = `
      <p><b>Matricula:</b> <span>${dados[i].matricula}</span></p>
      <p><b>Nome:</b> <span>${dados[i].nome}</span></p>
      <p><b>Idade:</b> <span>${dados[i].idade}</span></p>
    `;

    todosAlunos.appendChild(aluno);
  }
}

async function cadastrar() {
  const mat = document.querySelector("#mat");
  const nome = document.querySelector("#nome");
  const idade = document.querySelector("#idade");

  const dados = {
    matricula: mat.value,
    nome: nome.value,
    idade: idade.value,
  };

  const resposta = await fetch("http://localhost:3000/inserir", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  const data = await resposta.json();
  console.log(data);
}

mostrarTodosAlunos();
