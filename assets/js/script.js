let rulesModal = document.getElementById("rules-modal");
let rulesOpenButton = document.getElementById("open-modal");
let rulesClose = document.getElementsByClassName("close-modal")[0];


rulesOpenButton.addEventListener("click", openRulesModal);
rulesClose.addEventListener("click", closeRulesModal);



/** 
 * Opens rules modal when user clicks Rules button
*/
function openRulesModal () {
    rulesModal.style.display = "block";
    document.getElementById("description-box").style.display = "none";
    document.getElementById("rules-btn-container").style.display = "none";
}

/** 
 * Closes rules modal when user clicks x
*/
function closeRulesModal () {
    rulesModal.style.display = "none";
    document.getElementById("description-box").style.display = "block";
    document.getElementById("rules-btn-container").style.display = "block";
}

