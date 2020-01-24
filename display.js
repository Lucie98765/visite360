"use strict";
document.addEventListener("DOMContentLoaded", initialiser);

let root = document.documentElement;

function initialiser(evt) {
    /* var lesInputs = document.getElementById("photos").querySelectorAll("input");
     for (var unInput of lesInputs){
         unInput.addEventListener("click", selectionner_photo); 
     }*/

    var lesOnglets = document.querySelectorAll("h2");
    for (var unOnglet of lesOnglets) {
        unOnglet.addEventListener("click", plier_deplier);
    }

    var color_button = document.getElementById("color_button");
    color_button.addEventListener("click", update_color);
    
    var display_help = document.getElementById("help_btn");
    display_help.addEventListener("click", help);
    
    var close_help_btn = document.getElementById("close_help_btn");
    close_help_btn.addEventListener("click", close_help);
    
}


/*function selectionner_photo(){
    this.previousElementSibling.classList.toggle('photoSelec'); 
}*/

function plier_deplier() {
    this.nextElementSibling.classList.toggle('replier');
}

function update_color() {
    var new_color_value = document.getElementById("new_color").value;
    var p_error = document.getElementById("color_error");
    for (var i = 0; i < new_color_value.length; i++) {
        if (new_color_value[i] >= 'G' && new_color_value[i] <= 'Z') {
            p_error.innerHTML = "La couleur entrée n'est pas sous forme hexadécimal, elle ne doit contenir que des chiffres et/ou des lettres comprises entre A et F (par exemple : #28e43f).";
            return 0;
        }
    }
    if (new_color_value.substring(0, 1) == '#') {
        if (new_color_value.length != 7) {
            p_error.innerHTML = "La couleur entrée n'est pas sous forme hexadécimal, elle doit contenir 6 caractères après le # (par exemple : #28e43f).";
        } else root.style.setProperty('--couleur_ferme', new_color_value);
    } else {
        if (new_color_value.length != 6) {
            p_error.innerHTML = "La couleur entrée n'est pas sous forme hexadécimal, elle doit contenir 6 caractères (par exemple : #28e43f).";
        } else root.style.setProperty('--couleur_ferme', '#' + new_color_value);
    }
}

function help(){
    var help_window = document.getElementById("aide");
    help_window.classList.remove("hide");
    
    var couleur = document.getElementById("couleur");
    var accordeon = document.getElementById("accordeon");
    couleur.classList.add("hide");
    accordeon.classList.add("hide");
    
}

function close_help(){
    var help_window = document.getElementById("aide");
    help_window.classList.add("hide");
    
    var couleur = document.getElementById("couleur");
    var accordeon = document.getElementById("accordeon");
    couleur.classList.remove("hide");
    accordeon.classList.remove("hide");
}