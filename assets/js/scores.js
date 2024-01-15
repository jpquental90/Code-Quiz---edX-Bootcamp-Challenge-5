displayHighScores();


// Links 'Clear Highscores' button with the relevant HTML element, a 'click' event and the 'clearHighScores' function below.

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearHighScores);


//Function to clear Highscores from the displayed page and local storage.

function clearHighScores() {
    localStorage.removeItem("highScores");
    displayHighScores();
}


// Function indicating how the highscores should be displayed on the page, retrieving the relevant data from local storage and setting the text format for each entry, which are added as list items.

function displayHighScores() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    let highScoresList = document.getElementById("highscores");

    highScoresList.innerHTML = "";

    highScores.forEach((highScore, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${highScore.initials} - Score: ${highScore.score} - Time Left: ${highScore.timeLeft}`;
        highScoresList.appendChild(listItem);
    });
}