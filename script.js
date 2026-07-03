// comportamento/interação //

const formulario = document.getElementById("activity-form")

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  // encontrar e guardar o elemento
  const campoAtividade = document.getElementById("activity-name"); //campo inteiro
  // ler os dados e guardar o valor
  const atividade = campoAtividade.value; //apenas o valor
  // mostrar o valor
  console.log(atividade);

  const campoResponsavel = document.getElementById("responsible");
  const responsavel = campoResponsavel.value;
  console.log(responsavel);

  const campoPrazo = document.getElementById("deadline");
  const prazo = campoPrazo.value;
  console.log(prazo);

  const campoStatus = document.getElementById("status");
  const status = campoStatus.value;
  console.log(status);

  // localizar o corpo da tabela
  const tabelaAtividades = document.getElementById("tabela-atividades");

  // criar novas linhas na tabela
  const novaLinha = document.createElement("tr");
  // adicionar os valores nas linhas
  novaLinha.innerHTML = `  
    <td>${atividade}</td>
    <td>${responsavel}</td>
    <td>${prazo}</td>
    <td>${status}</td>
  `;

  tabelaAtividades.appendChild(novaLinha);

  formulario.reset();

});