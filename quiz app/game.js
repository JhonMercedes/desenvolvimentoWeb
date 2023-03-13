const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
    {
        question: "Inside which HTML elemet do we put the Javascript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "callled 'xxx.js'?",
        choice1: "<script href>",
        choice2: "<script>",
        choice3: "<script href>",
        choice4: "<script href>",
        answer: 2
    },
    {
        question: "How do you write 'Hello world' in an alert box?",
        choice1: "<msgbox>",
        choice2: "ola",
        choice3: "<alertbox>",
        choice4: "<alert>",
        answer: 3
    },
    {
        question: "callled 'xxx.js'?",
        choice1: "script href",
        choice2: "scripthelp",
        choice3: "script href",
        choice4: "script href",
        answer: 4
    }];

//CONSTANTS

const CORRECT_BONUS = 10;
const MAX_QUESTION = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    console.log(availableQuestion);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random()* availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerHTML = currentQuestion["choice" + number]
    })
}
startGame();