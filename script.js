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

function resp4() {

    var fruta = document.getElementById("fruta").value;

    var resp4 = "Eu como bot infelizmente não possso comer maçãs ;("

    var resp5 ="Que pena você não gostar de maçã"

    var resp6 ="Não entendi sua resposta, poderia repetir?"

    if (fruta == "S"||fruta == "s" || fruta == "sim" || fruta == "Sim"){

        document.getElementById("resp4").innerHTML = resp4;

    } else if (fruta == "N"|| fruta == "n" || fruta == "não"|| fruta == "Não") {

        document.getElementById("resp4").innerHTML = resp5;
       
      
        

    } else {

        document.getElementById("resp4").innerHTML = resp6;

    }

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


