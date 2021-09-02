var score=0; //global variable
window.onload = function() {
    $("start").onclick = startGame;
    $("end").onmouseover = endGame(score);
    $("game").onmouseleave = noCheat;
    var bounderies = $$("div#game div.boundary");
    for (var i=0; i<boundaries.length; i++){
        boundaries[i].onmouseover=overboundaries(score);
        boundaries[i].onmousleave = overboundaries(score);
    }
    document.getElementsByClassName("boundary example").innerHTML="score";
}


function startGame(){
    var boundaries= document.getElementsByClassName("boundary");
    for (var i=0; i< boundaries.length; i++){
        boundaries[i].style.backgroundColor= "#eeeeee";
        if (boundaries[i].style.backgroundColor!="red"){
            document.getElementById("status").innerHTML = "Move your mouse over the 'S' to begin.";
        }
    }
}


function endGame(score){
    var boundaries= document.getElementsByClassName("boundary");
    for (var i=0; i<boundaries.length; i++){
        if (boundaries[i].style.backgroundColor != "red"){
            document.getElementById("status").innerHTML="you Win!";
        }
    }
    score +=5;
}

function overBoudaries(score){
    var boundaries= document.getElementsByClassName("boundary");
    for (var i=0; i <boundaries.length; i++){
       if ( boundaries[i].style.backgroundColor== "red"){
           document.getElementById("status").innerHTML="you have lost!";
       }
    }
    score -= 10;
}
function noCheat() {
    var boundaries = document.getElementsByClassName("boundary");

    for (var i = 0; i < x.length; i++) {
        boundaries[i].style.backgroundColor = "red";
        if (x[i].style.backgroundColor == "red") {
            var s = document.getElementById("status").innerHTML = "No Cheating...";
        }
    }
}