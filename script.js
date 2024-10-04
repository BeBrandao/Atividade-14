function Soma() {
    var v1 = document.getElementById("v1").value;
    var v2 = document.getElementById("v2").value;

    var n1 = parseInt(v1);
    var n2 = parseInt(v2);

    var resultado = n1 + n2;

    document.getElementById("res").textContent = "Resposta: " + resultado;
}

function trocaLampada() {
    var img = document.getElementById("lampada");

    if (img.src.match("acesa")) {
        img.src = "lampada_apagada.jpg";
    } else{
        img.src = "lampada_acesa.jpg";
    }
}

function acenderLampada() {
    var img2 = document.getElementById("lampada_2");
    img2.src = "lampada_acesa.jpg";
}

function apagarLampada() {
    var img2 = document.getElementById("lampada_2");
    img2.src = "lampada_apagada.jpg";
}

function mudarCor(id) {
    if (id == "Verde") {
        document.body.style.backgroundColor = "green"
        document.body.style.color = "black"
    }
    if (id == "Vermelho") {
        document.body.style.backgroundColor = "red"
        document.body.style.color = "white"
    }
    if (id == "Reiniciar") {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"

    }
}

function restoDiv() {
    var v3 = document.getElementById("v3").value;
    var v4 = document.getElementById("v4").value;

    var n3 = parseInt(v3);
    var n4 = parseInt(v4);

    var resto = n3 % n4;

    document.getElementById("resto").textContent = "Resposta: " + resto;
}

function desconto() {
    var v5 = document.getElementById("v5").value;

    var n5 = parseInt(v5);

    var desconto = n5 * 0.05;
    var valorFinal = n5 - desconto;

    document.getElementById("descontado").textContent = "Valor Descontado: " + desconto;
    document.getElementById("valorF").textContent = "Valor com Desconto: " + valorFinal;
}

function avaliarIdade() {
    var idade = document.getElementById("idade").value;

    var idadeN = parseInt(idade);

    if (idadeN > 65) {
        document.getElementById("avaliacao").textContent = "Avaliação: Você tem 65 anos ou mais"
    }
    else if (idadeN < 65) {
        document.getElementById("avaliacao").textContent = "Avaliação: Você tem menos de 65 anos"
    }
    else {
        document.getElementById("avaliacao").textContent = "Avaliação: Você tem 65 anos"
    };
}
