let rulesModal = document.getElementById("rules-modal");
let rulesOpenButton = document.getElementById("open-modal");
let rulesClose = document.getElementsByClassName("close-modal")[0];
let quizStartButton = document.getElementById("start-btn");
let nameBox = document.getElementById("name-box");

rulesOpenButton.addEventListener("click", openRulesModal);
rulesClose.addEventListener("click", closeRulesModal);
quizStartButton.addEventListener("click", openNameBox);


//Opens rules modal when user clicks Rules button
function openRulesModal () {
    rulesModal.style.display = "block";
}

//Closes rules modal when user clicks x 
function closeRulesModal () {
    rulesModal.style.display = "none"
}

//Opens name input form
function openNameBox () {
    nameBox.style.display = "block";
}