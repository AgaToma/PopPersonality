//quiz intro area variables
let nameBox = document.getElementById("name-box");
let introNextButton = document.getElementById("intro-next");
let userName = document.getElementById("name");
let ageBox = document.getElementById("age-box");
let userAge = document.getElementById("age-input");
let startQuizButton = document.getElementById("start-quiz");
let resultsCard = document.getElementById("results-card");

//quiz intro event listeners
introNextButton.addEventListener("click", showAgeBox);
startQuizButton.addEventListener("click", validateAgeInput);

//quiz intro functions

/** 
 * Submits name input, hides input and shows age box
 */

function showAgeBox(event) {

    if (userName.value === "") {
        event.preventDefault();
        alert("Please enter your name");
    } else {
        nameBox.style.display = "none";
        ageBox.style.display = "block";

        document.getElementById("age-label").innerHTML = `
    <label id="age-label" for="age">${userName.value}, you are nearly set. Please enter you age, so we can assign you to the correct group
    </label>
    `
    }
}

/** 
 * validates age input presence and if number format
 */


function validateAgeInput(event) {

    if (isNaN(userAge.value) || userAge.value === "") {
        event.preventDefault();
        alert("Please enter your age in a number format");
    } else {
        console.log("Age entered")
    }

}

//quiz area variables

let question = document.getElementById("question");
//answers array - to be added

let questionCard = document.getElementById("question-card");
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let nextQuestionButton = document.getElementById("next-question");

//question for questions to be selected from minus questions already used
let availableQuestions = [];

//all questions
let questionsKids = [{
        question: "Is your room clean and in order?"
    },
    {
        question: "Is your homework always done on time?"
    },
    {
        question: "Do you like cooking?"
    },
    {
        question: "Do you often help others when they are stuck?"
    },
    {
        question: "Do you like when it snows?"
    },
    {
        question: "Do you wear a hat on when it gets cold?"
    },
    {
        question: "Are you a fast runner?"
    },
    {
        question: "Do you read many books?"
    },
    {
        question: "Do you ride a bicycle?"
    },
    {
        question: "Do you like dogs?"
    },
];


let questionsAdults = [{
        question: "Is your house clean and in order?"
    },
    {
        question: "Are you satisfied with your career?"
    },
    {
        question: "Do you like cooking?"
    },
    {
        question: "Do you often help others when they are stuck?"
    },
    {
        question: "Do you like when it snows?"
    },
];


//scores from each answer type
const answerYes = 10;
const answerSometimes = 5;
const answerNo = 1;

//maximum amount of questions a user will get
const maxQuestionCount = 10;

//quiz event listeners

startQuizButton.addEventListener("click", startQuiz);
nextQuestionButton.addEventListener("click", getNextQuestion);

/**
 * Starts quiz selecting random questions from kids or adults questions array
 */

function startQuiz() {
    score = 0;
    questionCounter = 0;
    ageBox.style.display = "none"
    questionCard.style.display = "block";

    if (userAge.value < 18) {
        availableQuestions = [...questionsKids];
    } else {
        availableQuestions = [...questionsAdults];
    }

    getNextQuestion();
}

/**
 * increments question counter, selects next random question out of available array and takes it out to avoid repetition
 */

function getNextQuestion() {
    if (questionCounter >= maxQuestionCount) {
        
        questionCard.style.display = "none";
        resultsCard.style.display = "block";
        
    }

    questionCounter++;
    document.getElementById("question-number").innerText = `${questionCounter}`;
    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    availableQuestions.splice(questionIndex, 1);

    nextQuestionButton.disabled = true;
    document.getElementById("display-validation").innerText = "Please select an answer";
}

/**
 * validates if user selected answer and removes disabled from the next question button
 */

let radios = document.querySelectorAll("input[type=radio]")

for (i of radios) {
    i.addEventListener("click", (event) => {
            if (event.target.checked) {
                nextQuestionButton.disabled = false
                console.log(event.target.value);
            }
        }
        )
    }

    