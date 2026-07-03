// comportamento/interação //

const formulario = document.getElementById("activity-form")

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  console.log("Formulário enviado");

  // encontrar e guardar o elemento
  const campoAtividade = document.getElementById("activity-name"); //campo inteiro
  // ler os dados e guardar o valor
  const atividade = campoAtividade.value.trim(); //apenas o valor
  // mostrar o valor
  console.log(atividade);

  const campoResponsavel = document.getElementById("responsible");
  const responsavel = campoResponsavel.value.trim();
  console.log(responsavel);

  const campoPrazo = document.getElementById("deadline");
  const prazo = campoPrazo.value;
  console.log(prazo);

  const campoStatus = document.getElementById("status");
  const status = campoStatus.value;
  console.log(status);

  // localizar o corpo da tabela
  const tabelaAtividades = document.getElementById("tabela-atividades");

  const linhas = tabelaAtividades.querySelectorAll("tr")
  for (let linha of linhas) {
    const colunas = linha.querySelectorAll("td");

    const atividadeTabela = colunas[0].textContent;
    const responsavelTabela = colunas[1].textContent;
    const prazoTabela = colunas[2].textContent;

    if (
      atividadeTabela === atividade &&
      responsavelTabela === responsavel &&
      prazoTabela === prazo
    ) {
      alert("Essa atividade está replicada.");
      retun; // return impede que o código continue e crie nova linha
    }

    console.log(atividadeTabela, responsavelTabela, prazoTabela);
  }

  // criar novas linhas na tabela
  const novaLinha = document.createElement("tr");
  // adicionar os valores nas linhas
  novaLinha.innerHTML = `  
    <td>${atividade}</td>
    <td>${responsavel}</td>
    <td>${prazo}</td>
    <td>${status}</td>
    <td>-</td>
    <td><button type="button" class="btn-excluir">Excluir</button></td>
  `;

  const botaoExcluir = novaLinha.querySelector(".btn-excluir"); //identificando o click

  botaoExcluir.addEventListener("click", function() {
    novaLinha.remove();
  });

  tabelaAtividades.appendChild(novaLinha);

  formulario.reset();

});