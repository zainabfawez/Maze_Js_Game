window.onload = function() {

    document.getElementById("start").onclick = onStart;
    document.getElementById("end").onmouseover = onEnd;
    document.getElementById("game").onmouseleave = onCheat;
    var boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = onBoundary;
    }
};

var score = 0;
var game_run = false;

function onStart() {
    game_run = true;
    var boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        if (boundaries[i].style.backgroundColor != "#eeeeee") {
            boundaries[i].style.backgroundColor = "#eeeeee";
            boundaries[i].onmouseover = onBoundary;
        }
    }
    document.getElementById("game").onmouseleave = onCheat;
    document.getElementById("status").innerHTML = "Move your mouse over the 'S' to begin." + " " + score;
}

function onBoundary() {
    var boundaries = document.getElementsByClassName("boundary");
    if (game_run) {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].style.backgroundColor = "red";
        }
        score -= 10;
        document.getElementById("status").innerHTML = "You Lost!" + " " + score;
        game_run = false;
    } else {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].onmouseover = null;
        }
    }
}

function onEnd() {
    var boundaries = document.getElementsByClassName("boundary");
    if (game_run) {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].style.backgroundColor = "green";
        }
        score += 5;
        document.getElementById("status").innerHTML = "You Won!" + " " + score;
        game_run = false;
    } else {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].onmouseover = null;
        }
        document.getElementById("game").onmouseleave = null;
    }

}

function onCheat() {
    var boundaries = document.getElementsByClassName("boundary");
    if (game_run) {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].style.backgroundColor = "red";
        }
        score -= 10;
        document.getElementById("status").innerHTML = "Nice Try...!!!" + " " + score;
        game_run = false;
    } else {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].onmouseover = null;
        }
        document.getElementById("game").onmouseleave = null;
    }

}