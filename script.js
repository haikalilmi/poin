// script.js
function updateScore() {
    var team = document.getElementById("team-select").value;
    var newScore = parseInt(document.getElementById("score-input").value);
    localStorage.setItem("score" + team, newScore);
}

function loadScores() {
    for (var i = 1; i <= 3; i++) {
        var score = localStorage.getItem("score" + i);
        if (score !== null) {
            document.getElementById("score" + i).textContent = score;
        }
    }
}

window.onload = loadScores;
