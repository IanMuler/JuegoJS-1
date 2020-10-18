/* Listener de las tres opciones a elegir y agregado de clase a cada una */

var selected = 0;
var playing = false;
document.getElementById("piedra1")
    .addEventListener("click", function selection() {

        if (selected == 0) {
            var piedra1 = document.getElementById("piedra1");
            piedra1.classList.add("selected");
            selected = 1;

        } else if (selected == 1 && playing == false) {
            var piedra1 = document.getElementById("piedra1");
            piedra1.classList.remove("selected");
            selected = 0;
            reset2();
        
        }
        selecciona_blanco();
        play_activado();
    })

document.getElementById("papel1")
    .addEventListener("click", function selection2() {

        if (selected == 0) {

            var papel1 = document.getElementById("papel1");
            papel1.classList.add("selected");
            selected = 2;
        } else if (selected == 2 && playing == false) {
            var papel1 = document.getElementById("papel1");
            papel1.classList.remove("selected");
            selected = 0;
            reset2();
        
        }
        play_activado();
        selecciona_blanco();
    })

document.getElementById("tijera1")
    .addEventListener("click", function selection3() {

        if (selected == 0) {

            var tijera1 = document.getElementById("tijera1");
            tijera1.classList.add("selected");
            selected = 3;
        } else if (selected == 3 && playing == false) {
            var tijera1 = document.getElementById("tijera1");
            tijera1.classList.remove("selected");
            selected = 0;
            reset2();
    
        }
        play_activado();
        selecciona_blanco();
    })

/* función para cambiar de color en "Selecciona uno" */
function selecciona_blanco() {
    if (selected != 0) {
        var selecciona = document.getElementById("seleccionauno");
        selecciona.classList.add("selecciona_uno_blanco");
    } else {
        var selecciona = document.getElementById("seleccionauno");
        selecciona.classList.remove("selecciona_uno_blanco");
    }
}

/* función para botón jugar más claro al seleccionar una opción */

var playon = false;

function play_activado() {
    if (selected != 0) {
        var play_activado = document.getElementById("play");
        play_activado.classList.add("play_activado");
        playon = true;

    } else {
        var play_activado = document.getElementById("play");
        play_activado.classList.remove("play_activado");
        playon = false;
    }
}


/* funciones de animacion en cpu */

function onpiedra2() {
    var piedra2 = document.getElementById("piedra2");
    piedra2.classList.add("selected");
}

function offpiedra2() {
    var piedra2 = document.getElementById("piedra2");
    piedra2.classList.remove("selected");
}

function onpapel2() {
    var papel2 = document.getElementById("papel2");
    papel2.classList.add("selected");
}

function offpapel2() {
    var papel2 = document.getElementById("papel2");
    papel2.classList.remove("selected");
}

function ontijera2() {
    var tijera2 = document.getElementById("tijera2");
    tijera2.classList.add("selected");
}

function offtijera2() {
    var tijera2 = document.getElementById("tijera2");
    tijera2.classList.remove("selected");
}


/* Animación CPU al pulsar botón */
var intervalo = 100;

function animation() {

    onpiedra2();
    setTimeout(offpiedra2, intervalo);
    setTimeout(onpapel2, intervalo);
    setTimeout(offpapel2, intervalo * 2);
    setTimeout(ontijera2, intervalo * 2);
    setTimeout(offtijera2, intervalo * 3);

}

var valorcpu;

function reset2() {
    offpapel2();
    offpiedra2();
    offtijera2();
}

function button_play() { // Llamada desde html

    if (playon == true) {
        reset2();
        animation_group();
        playing = true;
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


    /*función random sobre las opciones del CPU*/

    function random() {
        valorcpu = Math.round(Math.random() * 2);

        if (valorcpu == 0) {
            onpiedra2();
        } else if (valorcpu == 1) {
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
        setTimeout(resultado, intervalo * 5);
    }
}

/* Lógica de victoria y derrota */

function resultado() {
    console.log(selected);
    console.log(valorcpu);
    if (selected - 1 != valorcpu) {
        if (
            (selected === 1 && valorcpu === 2) ||
            (selected === 2 && valorcpu === 0) ||
            (selected === 3 && valorcpu === 1)) {

            var box = document.getElementById("resultado");
            var p = document.createElement("p");
            p.innerHTML = "Has ganado";
            box.appendChild(p);
            p.classList.add("winner");
            }
        }
            if (selected -1 == valorcpu) {

            var box = document.getElementById("resultado");
            var p = document.createElement("p");
            p.innerHTML = "Has empatado";
            box.appendChild(p);
            p.classList.add("draw");
        } else {

            var box = document.getElementById("resultado");
            var p = document.createElement("p");
            p.innerHTML = "Has perdido";
            box.appendChild(p);
            p.classList.add("loser");
        }

    }
