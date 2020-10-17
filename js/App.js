
var selected = 0;

document.getElementById("piedra1")
.addEventListener("click", function selection() {

    if (selected == 0){
    var piedra1 = document.getElementById("piedra1");
    piedra1.classList.add("selected");
    selected = 1;
    }
    else if(selected == 1){
        var piedra1 = document.getElementById("piedra1");
    piedra1.classList.remove("selected");
    selected = 0;
    }
    }
)
    
    document.getElementById("papel1")
    .addEventListener("click", function selection2() {

if (selected == 0){
    
    var papel1 = document.getElementById("papel1");
    papel1.classList.add("selected");
    selected = 2;
    }
    else if(selected == 2){
        var papel1 = document.getElementById("papel1");
        papel1.classList.remove("selected");
    selected = 0;
    }

    })

    document.getElementById("tijera1")
    .addEventListener("click", function selection3() {

if (selected == 0){
    
    var tijera1 = document.getElementById("tijera1");
    tijera1.classList.add("selected");
    selected = 3;
    }
    else if(selected == 3){
        var tijera1 = document.getElementById("tijera1");
        tijera1.classList.remove("selected");
    selected = 0;
    }

    })
