function resp1() {

    var resp1 = "Fico feliz em te conhecer "

    var nome = document.getElementById("nome").value;

    document.getElementById("resp1").innerHTML = resp1 + nome;

}

function resp2() {

    var resp2 = "Que interessante você querer "

    var vida = document.getElementById("vida").value;

    document.getElementById("resp2").innerHTML = resp2 + vida;

}

function resp3() {

    var resp3 = "Entendo.. Mas seja o que acontecer, espero que dê tudo certo a você! "

    document.getElementById("resp3").innerHTML = resp3;

}

function alternarPerguntas() {
    var perguntas = document.getElementById("perguntas").getElementsByTagName("li");
    var numPerguntas = perguntas.length;

    // Seleciona um índice aleatório para a próxima pergunta
    var proxPerguntaIndex = Math.floor(Math.random() * numPerguntas);

    // Esconde todas as perguntas
    for (var i = 0; i < numPerguntas; i++) {
        perguntas[i].style.display = "none";
    }

    // Exibe a próxima pergunta selecionada aleatoriamente
    perguntas[proxPerguntaIndex].style.display = "block";
}
