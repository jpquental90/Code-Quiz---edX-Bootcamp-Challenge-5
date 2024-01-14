const titleEl = document.getElementById("question-title");
const choicesEl = document.getElementById("choices");
const startButton = document.getElementById("start");

let questionIndex;
let score;

const questionsQuiz = [
    {
        title: "The TV series 'Foundation' is based on the books by which author?",
        choices: [
            { text: "Robert A. Heinlein", correct: false},
            { text: "Isaac Asimov", correct: true},
            { text: "Arthur C. Clarke", correct: false},
        ]
    },
    {
        title: "In which year was the first season released?",
        choices: [
            { text: "2021", correct: true},
            { text: "2022", correct: false},
            { text: "2023", correct: false},
        ]
    },
    {
        title: "In the series, what are the names of the three co-existing clone versions of different ages of emperor Cleo?",
        choices: [
            { text: "Sunrise, Sunset, Twilight", correct: false},
            { text: "Green, Amber, Red", correct: false},
            { text: "Dawn, Day, Dusk", correct: true},
        ]
    }
];

startButton.addEventListener("click", startQuiz);

startQuiz() 

function startQuiz() {
    console.log('hi');
    questionIndex = 0;
    score = 0;
    showQuestion();
}


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

function checkAnswer(event) {
    const selectedAnswer = event.target;
    const correct = selectedAnswer.dataset.correct === "true";

    if (correct) {
        alert("Right!");
        score++;
    } else {
        alert("Wrong!");
    }

    questionIndex++;
    showQuestion();
}

function endQuiz() {
    alert(`Quiz completed! Your score is ${score}/${questionsQuiz.length}`);
}
