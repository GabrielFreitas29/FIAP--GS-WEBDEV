const perguntas = [
  {
    texto: "Qual órgão brasileiro monitora queimadas?",
    opcoes: ["ANEEL", "INPE", "IBAMA", "ANA"],
    correta: 1
  },
  {
    texto: "O que significa IoT?",
    opcoes: ["Internet of Things", "Index of Technology", "Input Output Terminal", "Integrated Open Tools"],
    correta: 0
  },
  {
    texto: "Qual desastre está ligado ao aumento do nível dos rios?",
    opcoes: ["Terremoto", "Furacão", "Enchente", "Avalanche"],
    correta: 2
  },
  {
    texto: "Satélites ajudam no monitoramento climático?",
    opcoes: ["Não", "Sim", "Apenas em oceanos", "Somente à noite"],
    correta: 1
  },
  {
    texto: "O que é um alerta preventivo?",
    opcoes: [
      "Aviso após o desastre",
      "Aviso antes do desastre",
      "Relatório mensal",
      "Senha do sistema"
    ],
    correta: 1
  },
  {
    texto: "O SentinelaOrbital usa sensores IoT?",
    opcoes: ["Não", "Sim", "Só com internet", "Só em cidades"],
    correta: 1
  },
  {
    texto: "Queimadas podem ser detectadas por satélites?",
    opcoes: ["Não", "Sim", "Só por drones", "Só à noite"],
    correta: 1
  },
  {
    texto: "O que é uma API?",
    opcoes: [
      "Banco de dados",
      "Sistema operacional",
      "Comunicação entre sistemas",
      "Rede sem fio"
    ],
    correta: 2
  },
  {
    texto: "Qual o objetivo do SentinelaOrbital?",
    opcoes: [
      "Vender dados",
      "Emitir alertas climáticos",
      "Substituir meteorologia",
      "Previsão turística"
    ],
    correta: 1
  },
  {
    texto: "Por que alertas antecipados são importantes?",
    opcoes: [
      "Cobertura da mídia",
      "Aumentar custos",
      "Reduzir danos",
      "Informar depois"
    ],
    correta: 2
  }
];

let questaoAtual = 0;
let acertos = 0;

function mostrarQuestao() {
  const pergunta = perguntas[questaoAtual];

  document.getElementById("q-numero").textContent =
    `Pergunta ${questaoAtual + 1} de ${perguntas.length}`;

  document.getElementById("q-texto").textContent =
    pergunta.texto;

  const opcoes = document.getElementById("q-opcoes");
  opcoes.innerHTML = "";

  pergunta.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement("button");

    botao.textContent = opcao;
    botao.classList.add("opcao-btn");

    botao.onclick = () => responder(indice);

    opcoes.appendChild(botao);
  });
}

function responder(indice) {
  if (indice === perguntas[questaoAtual].correta) {
    acertos++;
    alert("Resposta correta!");
  } else {
    alert("Resposta incorreta!");
  }

  questaoAtual++;

  if (questaoAtual < perguntas.length) {
    mostrarQuestao();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("quiz-area").style.display = "none";
  document.getElementById("resultado-area").style.display = "flex";

  document.getElementById("res-acertos").textContent = acertos;
  document.getElementById("res-total").textContent = perguntas.length;

  const porcentagem =
    Math.round((acertos / perguntas.length) * 100);

  document.getElementById("res-pct").textContent =
    porcentagem + "%";

  if (porcentagem >= 90) {
    document.getElementById("res-mensagem").textContent =
      "Excelente conhecimento!";
  } else if (porcentagem >= 60) {
    document.getElementById("res-mensagem").textContent =
      "Bom desempenho!";
  } else {
    document.getElementById("res-mensagem").textContent =
      "Revise o conteúdo da página.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarQuestao();
});