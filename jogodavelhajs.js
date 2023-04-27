var jogador = "X";
var jogadas = 0;

window.onload = function() {
    var celulas = document.getElementsByClassName("cell");
    for (var i = 0; i < celulas.length; i++) {
        celulas[i].addEventListener("click", function() {
            jogar(this);
        });
    }
};

 function jogar(celula) {
  if (celula.innerHTML == "") {
    celula.innerHTML = jogador;
    jogadas++;
    verificarVencedor();
    mudarJogador();
  }
}


function verificarVencedor() {
    var celulas = document.getElementsByClassName("cell");

    for (var i = 0; i < 9; i += 3) {
        if (celulas[i].innerHTML != "" && celulas[i].innerHTML == celulas[i+1].innerHTML && celulas[i+1].innerHTML == celulas[i+2].innerHTML) {
            alert("Jogador " + jogador + " venceu!");
            resetarJogo();
            return;
        }
    }

    for (var i = 0; i < 3; i++) {
        if (celulas[i].innerHTML != "" && celulas[i].innerHTML == celulas[i+3].innerHTML && celulas[i+3].innerHTML == celulas[i+6].innerHTML) {
            alert("Jogador " + jogador + " venceu!");
            resetarJogo();
            return;
        }
    }

    if (celulas[0].innerHTML != "" && celulas[0].innerHTML == celulas[4].innerHTML && celulas[4].innerHTML == celulas[8].innerHTML) {
        alert("Jogador " + jogador + " venceu!");
        resetarJogo();
        return;
    }

    if (celulas[2].innerHTML != "" && celulas[2].innerHTML == celulas[4].innerHTML && celulas[4].innerHTML == celulas[6].innerHTML) {
        alert("Jogador " + jogador + " venceu!");
        resetarJogo();
        return;
    }

    if (jogadas == 9) {
        alert("Empate!");
        resetarJogo();
        return;
    }
}

function mudarJogador() {
    if (jogador == "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }
}

function resetarJogo() {
    var celulas = document.getElementsByClassName("cell");
    for (var i = 0; i < celulas.length; i++) {
        celulas[i].innerHTML = "";
    }
    jogador = "X";
    jogadas = 0;
}
