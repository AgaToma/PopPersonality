let nameBox = document.getElementById("name-box");
let introNextButton = document.getElementById("intro-next");
let userName = document.getElementById("name");
let ageBox = document.getElementById("age-box");

introNextButton.addEventListener("click", showAgeBox);

//Submits name input, hides input and shows age box
function showAgeBox () {

    if (userName.value === "") {
        alert("Please fill your name");
    } else {
    nameBox.style.display = "none";
    ageBox.style.display = "block";
    }
}