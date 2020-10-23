// Listener click de opciones

var selected = 0; //opción elegida
var playing = false; 
var printed = 0; //<p> de victoria, derrota, empate
var intervalo = 100; //Intervalo de animación


var piedra1 = document.getElementById("piedra1");
var papel1 = document.getElementById("papel1");
var tijera1 = document.getElementById("tijera1");

var piedra2 = document.getElementById("piedra2");
var papel2 = document.getElementById("papel2");
var tijera2 = document.getElementById("tijera2");

var playbutton = document.getElementById("play");
var seleccionauno = document.getElementById("seleccionauno");

var box = document.getElementById("resultado");
var p = document.createElement("p");

piedra1.addEventListener("click", function () {
    if (playing == false) {
        if (playing == false && selected == 0 || selected == 2 || selected == 3) {

            piedra1.classList.add("selected");
            papel1.classList.remove("selected");
            tijera1.classList.remove("selected");
            selected = 1;

        } else if (playing == false && selected == 1) {

            piedra1.classList.remove("selected");
            selected = 0;
            deletep();
        }
    }
    selecciona_blanco();
    play_activado();
    reset();
})

papel1.addEventListener("click", function () {
    if (playing == false) {
        if (selected == 0 || selected == 1 || selected == 3) {
            piedra1.classList.remove("selected");
            tijera1.classList.remove("selected");
            papel1.classList.add("selected");
            selected = 2;
        } else if (playing == false && selected == 2) {
            papel1.classList.remove("selected");
            selected = 0;

            deletep();
            console.log(selected);
        }
    }
    play_activado();
    selecciona_blanco();
    reset();
})

tijera1.addEventListener("click", function () {
    if (playing == false) {
        if (playing == false && selected == 0 || selected == 1 || selected == 2) {
            papel1.classList.remove("selected");
            piedra1.classList.remove("selected");
            tijera1.classList.add("selected");
            selected = 3;
            console.log(selected);
            console.log(playing);
        } else if (playing == false && selected == 3) {
            tijera1.classList.remove("selected");
            selected = 0;
            reset();
            deletep();
            console.log(selected);
        }
    }
    play_activado();
    selecciona_blanco();
    reset();
})

// Desaparecer "Selecciona uno" 
function selecciona_blanco() {
    if (selected != 0) {
        seleccionauno.classList.add("selecciona_uno_blanco");
    } else {
        seleccionauno.classList.remove("selecciona_uno_blanco");
    }
}

// Habilitar botón "JUGAR"
function play_activado() {
    if (selected != 0) {
        playbutton.classList.add("play_activado");
    } else {
        playbutton.classList.remove("play_activado");
    }
}

//Circulo celeste sobre opciones de CPU
function onpiedra2() {
    piedra2.classList.add("selected");
}
function offpiedra2() {
    piedra2.classList.remove("selected");
}
function onpapel2() {
    papel2.classList.add("selected");
}
function offpapel2() {
    papel2.classList.remove("selected");
}
function ontijera2() {
    tijera2.classList.add("selected");
}
function offtijera2() {
    tijera2.classList.remove("selected");
}

// Animación CPU
function animation() {
    onpiedra2();
    setTimeout(offpiedra2, intervalo);
    setTimeout(onpapel2, intervalo);
    setTimeout(offpapel2, intervalo * 2);
    setTimeout(ontijera2, intervalo * 2);
    setTimeout(offtijera2, intervalo * 3);
}

function animation_group() {
    animation();
    setTimeout(animation, intervalo * 3);
    setTimeout(animation, intervalo * 6);
    setTimeout(animation, intervalo * 9);
    setTimeout(animation, intervalo * 12);
    setTimeout(animation, intervalo * 15);
    setTimeout(animation, intervalo * 18);
    setTimeout(random, intervalo * 21);
}

//reset
function reset() {
    offpapel2();
    offpiedra2();
    offtijera2();
    deletep();
}

//play
function button_play() { // Llamada desde index
    if (selected != 0 && playing == false) {
        reset();
        deletep();
        animation_group();
        playing = true;
    }
}

//Opcione random CPU
function random() {

    var valorcpu = Math.round(Math.random() * 2) + 1;
    if (valorcpu == 1) {
        onpiedra2();
    } else if (valorcpu == 2) {
        onpiedra2();
        setTimeout(offpiedra2, intervalo);
        setTimeout(onpapel2, intervalo);
    } else {
        onpiedra2();
        setTimeout(offpiedra2, intervalo);
        setTimeout(onpapel2, intervalo);
        setTimeout(offpapel2, intervalo * 2);
        setTimeout(ontijera2, intervalo * 2);
    }
    setTimeout(playing = false, intervalo * 5);
    setTimeout(resultado, intervalo * 2);
}

//Lógica victoria, derrota, empate
function resultado() {
    if (selected != valorcpu) {
        if (
            (selected === 1 && valorcpu === 3) ||
            (selected === 2 && valorcpu === 1) ||
            (selected === 3 && valorcpu === 2)) {

            p.innerHTML = "Has ganado";
            box.appendChild(p);
            p.classList.add("winner");
        } else {

            p.innerHTML = "Has perdido";
            box.appendChild(p);
            p.classList.add("loser");
        }
    } else {
        p.innerHTML = "Has empatado";
        box.appendChild(p);
        p.classList.add("draw");
    }
    printed = 1;
}

//Borrar <p> generado en function resultado
function deletep() {
    if (printed == 1) {
        p.classList.remove("winner");
        p.classList.remove("draw");
        p.classList.remove("loser");
        box.removeChild(p);
        printed = 0;
    }
}