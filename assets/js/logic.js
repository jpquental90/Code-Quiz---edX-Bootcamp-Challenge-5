//Variable declarations and link with HTML elements

const titleEl = document.getElementById("question-title");
const choicesEl = document.getElementById("choices");
const startButton = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const questionsDiv = document.getElementById("questions");
const endScreen = document.getElementById("end-screen");
const feedbackDiv = document.getElementById("feedback");
const finalScoreSpan = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const timerSpan = document.getElementById("time");

let questionIndex;
let score;
let timer;
let timeoutId;
let timerInterval;

const timerDuration = 75; 
const timePenalty = 10;
const correctSound = new Audio("./assets/sfx/correct.wav");
const incorrectSound = new Audio("./assets/sfx/incorrect.wav");


// EventListener + Function to start quiz after clicking on 'Start' button

startButton.addEventListener("click", function() {
    questionIndex = 0;
    score = 0;
    startScreen.classList.add("hide");
    questionsDiv.classList.remove("hide");
    endScreen.classList.add("hide");
    feedbackDiv.classList.add("hide");
    showQuestion();
    startTimer();
});


// Function to set the timer to start when the quiz begins (referred to in the previous function). Quiz ends if time runs out. There is a delay of a second between questions. Time is subtracted if an incorrect answer is given.

function startTimer() {
    timer = timerDuration;
    timerSpan.textContent = timer;

    timerInterval = setInterval(function () {
        timer--;
        timerSpan.textContent = timer;

        if (timer <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}


// Function to display each individual question and associated choices, regardless of quiz length or type of question.

function showQuestion() {
    if (questionIndex < questionsQuiz.length) {
        const currentQuestion = questionsQuiz[questionIndex];
        titleEl.textContent = currentQuestion.title;
        choicesEl.innerHTML = "";

        for (let i = 0; i < currentQuestion.choices.length; i++) {
            const eachChoice = currentQuestion.choices[i];
            const listItem = document.createElement("li");
            listItem.textContent = eachChoice.text;
            listItem.dataset.correct = eachChoice.correct;
            listItem.addEventListener("click", checkAnswer);
            choicesEl.appendChild(listItem);
        }
    } else {
        endQuiz();
    }
}


// Function to check whether the selected answer is correct or incorrect. Score increases or decreases accordingly, feedback is given and a corresponding sound is played. The final screen is displayed when we have run out of questions.

function checkAnswer(event) {
    const selectedAnswer = event.target;
    const correct = selectedAnswer.dataset.correct === "true";

    if (correct) {
        feedbackDiv.textContent = "Correct!";
        feedbackDiv.classList.remove("hide");
        score++;
        correctSound.play();
    } else {
        feedbackDiv.textContent = "Wrong!";
        feedbackDiv.classList.remove("hide");
        incorrectSound.play();

        timer -= timePenalty;
        if (timer < 0) {
            timer = 0;
        }

        if (questionIndex === questionsQuiz.length - 1) {
            clearTimeout(timeoutId);
            endQuiz();
        }
    }
    
    setTimeout(function () {
        feedbackDiv.classList.add("hide"); 
        questionIndex++;
        showQuestion(); 
    }, 1000);
}


// EventListener / function added to allow user to submit their initials in the final screen by pressing the key 'enter'.

initialsInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        submitInitialsAndSave();
    }
});


// Function indicating what should be displayed in the final screen.

function endQuiz() {
    clearInterval(timerInterval);
    feedbackDiv.classList.add("hide");
    questionsDiv.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScoreSpan.textContent = score;
    submitInitialsAndSave();
}


// Function to assign values to the user's input, score and time left, save them in local storage and set them in order in the highscores table, prioritising score over time left. Once the user submits their initials, the window switches to the Highscores display.

function submitInitialsAndSave() {

    let submittedInitials = initialsInput.value;

    if (submittedInitials.trim() !== "") {
        const highScore = {
            initials: submittedInitials,
            score: score,
            timeLeft: timer,
        };

        let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

        highScores.push(highScore);

        highScores.sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            return b.timeLeft - a.timeLeft;
        });

        localStorage.setItem("highScores", JSON.stringify(highScores));

        window.location.href = "highscores.html";
    }
}


// Links function above to a 'click' event assigned to the 'Submit' button.

submitButton.addEventListener("click", submitInitialsAndSave);