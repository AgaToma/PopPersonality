let nameBox = document.getElementById("name-box");
let introNextButton = document.getElementById("intro-next");
let userName = document.getElementById("name");
let ageBox = document.getElementById("age-box");
let userAge = document.getElementById("age");
let startQuizButton = document.getElementById("start-quiz");

introNextButton.addEventListener("click", showAgeBox);
startQuizButton.addEventListener("click", validateAgeInput);

//Submits name input, hides input and shows age box
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

//validates age input presence and if number format

function validateAgeInput (event) {

    if (userAge.value !== NaN) {
        event.preventDefault();
        alert("Please enter your age in a number format");
    } else {
        console.log("Age entered")
    }

}


