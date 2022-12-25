//quiz intro area variables
let nameBox = document.getElementById("name-box");
let introNextButton = document.getElementById("intro-next");
let userName = document.getElementById("name");
let ageBox = document.getElementById("age-box");
let userAge = document.getElementById("age-input");
let startQuizButton = document.getElementById("start-quiz");

//quiz intro event listeners
introNextButton.addEventListener("click", showAgeBox);
startQuizButton.addEventListener("click", validateAgeInput);

//quiz intro functions

/** 
 * Submits name input, hides input and shows age box
*/

function showAgeBox (event) {

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


function validateAgeInput (event) {

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

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
//question for questions to be selected from minus questions already used
let availableQuestions = [];

//all questions
let questions = [
    {question: "Is your room clean and in order?"},
    {question: "Is your homework always done on time?"},
    {question: "Do you like cooking?"},
    {question: "Do you often help others when they are stuck?"},
    {question: "Do you like when it snows?"},
];


//distributes user to correct age group and starts quiz



