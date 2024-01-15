document.addEventListener("DOMContentLoaded", function () {

    function displayHighScores() {
      let highScoresList = document.getElementById("highscores");
      let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  

      highScoresList.innerHTML = "";
  
      highScores.forEach((score) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${score.initials}: ${score.score}`;
        highScoresList.appendChild(listItem);
      });
    }
  
    document.getElementById("clear").addEventListener("click", function () {

      localStorage.removeItem("highScores");
  
      displayHighScores();
    });
  
    displayHighScores();
  });