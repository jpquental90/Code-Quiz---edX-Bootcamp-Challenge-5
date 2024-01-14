const questionTitle = document.getElementById("question-title");
const choiceAnswers = document.getElementById("choices");
const startButton = document.getElementById("start");

let questionIndex;
let score;

const questions = [
    {
        question: "The TV series 'Foundation' is based on the books by which author?",
        answers: [
            { text: "Robert A. Heinlein", correct: false},
            { text: "Isaac Asimov", correct: true},
            { text: "Arthur C. Clarke", correct: false},
        ]
    },
    {
        question: "In which year was the first season released?",
        answers: [
            { text: "2021", correct: true},
            { text: "2022", correct: false},
            { text: "2023", correct: false},
        ]
    },
    {
        question: "In the series, what are the names of the three co-existing clone versions of different ages of emperor Cleo?",
        answers: [
            { text: "Sunrise, Sunset, Twilight", correct: false},
            { text: "Green, Amber, Red", correct: false},
            { text: "Dawn, Day, Dusk", correct: true},
        ]
    }
];

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    questionIndex = 0;
    score = 0;
    showQuestion();
}