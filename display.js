"use strict";
document.addEventListener("DOMContentLoaded", initialiser);


function initialiser(evt) {
    var lesInputs = document.getElementById("photos").querySelectorAll("input");
    for (var unInput of lesInputs){
        unInput.addEventListener("click", selectionner_photo); 
    }
    
    var lesOnglets = document.querySelectorAll("h2");
    for (var unOnglet of lesOnglets){
        unOnglet.addEventListener("click", plier_deplier); 
    }
}


function selectionner_photo(){
    this.previousElementSibling.classList.toggle('photoSelec'); 
}

function plier_deplier(){
    this.nextElementSibling.classList.toggle('replier');
}