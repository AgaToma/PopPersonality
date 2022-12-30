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
};

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

};

//quiz area variables

let question = document.getElementById("question");
let radios = document.querySelectorAll("input[type=radio]");
let choices = Array.from(document.getElementsByName("answer"));

let questionCard = document.getElementById("question-card");
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let nextQuestionButton = document.getElementById("next-question");

//question for questions to be selected from minus questions already used
let availableQuestions = [];

//all questions pulled from json files
let questionsKids = [];

fetch("assets/js/questionsKids.json")
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questionsKids = loadedQuestions;
    });

let questionsAdults = [];

fetch("assets/js/questionsAdults.json")
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questionsAdults = loadedQuestions;
    });


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
};

/**
 * increments question counter, selects next random question out of available array and takes it out to avoid repetition
 */

function getNextQuestion() {

    allAnswers.push(selectedAnswer);
    console.log(allAnswers);

    if (questionCounter >= maxQuestionCount) {

        questionCard.style.display = "none";
        resultsCard.style.display = "block";

    } else {

        questionCounter++;
        document.getElementById("question-number").innerText = `${questionCounter}`;
        let questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        choices.forEach((choice) => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        });

        availableQuestions.splice(questionIndex, 1);

        nextQuestionButton.disabled = true;
        document.getElementById("display-validation").innerText = "Please select an answer";
    };

    /**
     * validates if user selected answer and removes disabled from the next question button
     */

    for (let i of radios) {
        i.addEventListener("click", (event) => {
            if (event.target.checked) {
                nextQuestionButton.disabled = false;
                document.getElementById("display-validation").innerText = "";

            }
        })
    }
};

//store all answers
let allAnswers = [];

//Set answer on radio click (this overrides each click)
let selectedAnswer = "";

//Push current answer when next button is clicked to only store the right choice
//allAnswers.push(selectedAnswer);
/**
 * captures user selected answer data number and adds it to the score
 */
let loopCounter = 0;
choices.forEach((choice) => {
    choice.addEventListener('click', (event) => {
        loopCounter++;
        selectedChoice = event.target;
        selectedAnswer = selectedChoice.dataset['number'];
        score = score + Number(selectedAnswer);

        if (loopCounter === maxQuestionCount){
        console.log(score);};

    });
});

