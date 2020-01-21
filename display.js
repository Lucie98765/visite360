"use strict";
document.addEventListener("DOMContentLoaded", initialiser);


function initialiser(evt) {
    var lesInputs = document.getElementById("photos").querySelectorAll("input");
    for (var unInput of lesInputs){
        unInput.addEventListener("click", selectionner_photo); 
    }
}


function selectionner_photo(){
    this.previousElementSibling.classList.toggle('photoSelec'); 
}