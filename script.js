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

function setTimerDuration() {
    var duration = prompt("Masukkan durasi timer (dalam detik):", 10);
    if (duration != null) {
        localStorage.setItem("timerDuration", duration);
    }
}

function startTimer() {
    var timerDuration = parseInt(localStorage.getItem("timerDuration")) || 10;
    var timerDisplay = document.getElementById("timerDisplay");
    var timerSound = document.getElementById("timer-sound");
    var timerHabis = document.getElementById("timer-habis");

    var countdown = timerDuration;
    timerDisplay.textContent = countdown;

    var timerInterval = setInterval(function() {
        countdown--;
        timerDisplay.textContent = countdown;

        if (countdown > 0) {
            timerSound.play().catch(error => console.log("Error playing sound:", error)); // Mainkan suara setiap detik
        } else {
            timerSound.pause();
            timerSound.currentTime = 0;
            clearInterval(timerInterval);
            timerHabis.play().catch(error => console.log("Error playing sound:", error)); // Mainkan suara ketika timer mencapai nol
        }
    }, 1000);

    // Hapus timer setelah dijalankan
    localStorage.removeItem("timerStarted");
}

window.onload = function() {
    loadScores();
    // Timer tidak dimulai otomatis
};
