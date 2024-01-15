document.addEventListener("DOMContentLoaded", function () {
    displayHighScores();

    let clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", clearHighScores);
});

function displayHighScores() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    let highScoresList = document.getElementById("highscores");

    // Clear the existing list
    highScoresList.innerHTML = "";

    highScores.forEach((highScore, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${highScore.initials} - Score: ${highScore.score} - Time Left: ${highScore.timeLeft}`;
        highScoresList.appendChild(listItem);
    });
}

function clearHighScores() {
    // Clear the high scores from local storage
    localStorage.removeItem("highScores");

    // Refresh the displayed high scores
    displayHighScores();
}