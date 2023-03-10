//quiz intro area variables
let nameBox = document.getElementById("name-box");
let introNextButton = document.getElementById("intro-next");
let userName = document.getElementById("name-input");
let ageBox = document.getElementById("age-box");
let userAge = document.getElementById("age-input");
let startQuizButton = document.getElementById("start-quiz");

//quiz area variables

let question = document.getElementById("question");
let radios = document.querySelectorAll("input[type=radio]");
let choices = Array.from(document.getElementsByName("answer"));

let questionCard = document.getElementById("question-card");
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let nextQuestionButton = document.getElementById("next-question");

//questions array for questions to be selected from minus questions already used
let availableQuestions = [];

//array to store all answers 
let allAnswers = [];

//Set answer on radio click (this overrides each click)
let selectedAnswer = "";

//quiz results variables
let resultsCard = document.getElementById("results-card");
let charCard = document.getElementById("character-card");
let charName = document.getElementById("character-name");
let availableResults = [];

//quiz intro event listeners
introNextButton.addEventListener("click", showAgeBox);
startQuizButton.addEventListener("click", validateAgeInput);

//quiz intro functions

/** 
 * Submits name input, hides input and shows age box
 */

function showAgeBox() {

    if (userName.value === "") {
        introNextButton.disabled = true;
        document.getElementById("name-reminder").style.display = "block";
        userName.addEventListener("input", function enableButton() {
            introNextButton.disabled = false;
            document.getElementById("name-reminder").style.display = "none";
        });
    } else {
        nameBox.style.display = "none";
        ageBox.style.display = "block";

        document.getElementById("age-label").innerHTML = `
    <label id="age-label" for="age">${userName.value}, you are nearly set. Please enter you age to continue, so we can assign you to the correct group
    </label>
    `;
    }
}

/** 
 * validates age input presence and number format
 */

function validateAgeInput() {

    if (userAge.value === "") {
        startQuizButton.disabled = true;
        userAge.addEventListener("input", function enableButton() {
            startQuizButton.disabled = false;
        });
    } else if (userAge.value < 6) {
        startQuizButton.disabled = true;
        document.getElementById("age-reminder").style.display = "block";
        userAge.addEventListener("input", function enableButton() {
            startQuizButton.disabled = false;
            document.getElementById("age-reminder").style.display = "none";
        });
    } else {
        startQuiz();
    }
}



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

let resultsKids = [];


fetch("assets/js/resultsKids.json")
    .then((res) => {
        return res.json();
    })
    .then((loadedResults) => {
        resultsKids = loadedResults;
    });

let resultsTeens = [];


fetch("assets/js/resultsTeens.json")
    .then((res) => {
        return res.json();
    })
    .then((loadedResults) => {
        resultsTeens = loadedResults;
    });

let resultsAdults = [];


fetch("assets/js/resultsAdults.json")
    .then((res) => {
        return res.json();
    })
    .then((loadedResults) => {
        resultsAdults = loadedResults;
    });


//maximum amount of questions a user will get
const maxQuestionCount = 10;

//quiz event listeners


nextQuestionButton.addEventListener("click", getNextQuestion);

/**
 * Starts quiz selecting random questions from kids or adults questions array
 */

function startQuiz() {
    score = 0;
    questionCounter = 0;
    ageBox.style.display = "none";
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

    //Push current answer when next button is clicked to only store the right choice
    allAnswers.push(Number(selectedAnswer));

    //Code for reduce method from MDN docs
    score = allAnswers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );


    /**
     * resets the chosen answer from previous question 
     */
    for (let i of radios) {
        nextQuestionButton.addEventListener("click", () => {
            i.checked = false;
        });
    }


    if (questionCounter >= maxQuestionCount) {

        questionCard.style.display = "none";
        document.getElementById("quiz-area").style.backgroundColor = "transparent";
        resultsCard.style.display = "block";
        getResults();

    } else {

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

    for (let i of radios) {
        i.addEventListener("click", (event) => {
            if (event.target.checked) {
                nextQuestionButton.disabled = false;
                document.getElementById("display-validation").style.display = "none";

            }
        });
    }
    /**
     * changes the button on last question to suggest getting results
     */
    if (questionCounter === maxQuestionCount) {
        nextQuestionButton.innerText = "Submit and get results";
    }
}


/**
 * captures user selected answer data number and adds it to the score
 */
let loopCounter = 0;
choices.forEach((choice) => {
    choice.addEventListener('click', (event) => {
        loopCounter++;
        let selectedChoice = event.target;
        selectedAnswer = selectedChoice.dataset.number;
    });
});

/**
 * Assigns result cards depending on score results
 */

function getResults() {

    if (userAge.value <= 12) {
        availableResults = [...resultsKids];
    } else if (userAge.value > 12 && userAge.value < 18) {
        availableResults = [...resultsTeens];
    } else {
        availableResults = [...resultsAdults];
    }


    if (score >= 10 && score <= 25) {
        charName.innerText = `${availableResults[0].name}`;
        charCard.innerHTML = `
        <div id="character-card">
            <div id="character-img"><img src=${availableResults[0].photo} class="char-img" alt="${availableResults[0].alt}"></div>
            <div id="character-description">${availableResults[0].description}</div>
        </div>`;
    } else if (score > 15 && score <= 50) {
        charName.innerText = `${availableResults[1].name}`;
        charCard.innerHTML = `
        <div id="character-card">
            <div id="character-img"><img src=${availableResults[1].photo} class="char-img" alt="${availableResults[1].alt}"></div>
            <div id="character-description">${availableResults[1].description}</div>
        </div>`;

    } else if (score > 50 && score <= 75) {
        charName.innerText = `${availableResults[2].name}`;
        charCard.innerHTML = `
        <div id="character-card">
            <div id="character-img"><img src=${availableResults[2].photo} class="char-img" alt="${availableResults[2].alt}"></div>
            <div id="character-description">${availableResults[2].description}</div>
        </div>`;

    } else if (score > 75) {
        charName.innerText = `${availableResults[3].name}`;
        charCard.innerHTML = `
        <div id="character-card">
            <div id="character-img"><img src=${availableResults[3].photo} class="char-img" alt="${availableResults[3].alt}"></div>
            <div id="character-description">${availableResults[3].description}</div>
        </div>`;

    } else {
        console.log("error");
    }
}