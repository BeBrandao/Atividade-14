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
    var texto = document.getElementById("texto")

    if (img.src.match("acesa")) {
        img.src = "lampada_apagada.jpg";
    } else{
        img.src = "lampada_acesa.jpg";
    }
}