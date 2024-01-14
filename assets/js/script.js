const questionTitle = document.getElementById("question-title");
const choiceAnswers = document.getElementById("choices");

let questionIndex = 0;
let score = 0;

const questions = [
    {
        question: "Who did it?",
        answers: [
            { text: "Lady Violet", correct: true},
            { text: "Vice President Mauve", correct: false},
            { text: "Duchess of Vermillion", correct: false},
        ]
    },
    {
        question: "Where?",
        answers: [
            { text: "The central fire", correct: false},
            { text: "The ancient ruins", correct: false},
            { text: "The thick forest", correct: true},
        ]
    },
    {
        question: "With what?",
        answers: [
            { text: "A cauldron", correct: false},
            { text: "A log", correct: false},
            { text: "A broom", correct: true},
        ]
    }
];