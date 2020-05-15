"use strict";
let root = document.documentElement;

Document.prototype.ready = callback => {
    if (callback && typeof callback === 'function') {
        document.addEventListener("DOMContentLoaded", () => {
            if (document.readyState === "interactive" || document.readyState === "complete") {
                return callback();
            }
        });
    }
};

$(document.body).on('click', 'h2', function () {
    this.nextElementSibling.classList.toggle('replier');

});

$(document.body).on('click', 'input', function () {
    this.previousElementSibling.classList.toggle('photoSelec');
});

$(document.body).on('click', '#color_button', function () {
    var new_color_value = document.getElementById("new_color").value;
    var old_colot_value = document.getElementById("after").value;
    var p_error = document.getElementById("color_error");
    for (var i = 0; i < new_color_value.length; i++) {
        if (new_color_value[i] >= 'G' && new_color_value[i] <= 'Z') {
            p_error.innerHTML = "La couleur entrée n'est pas sous forme hexadécimal, elle ne doit contenir que des chiffres et/ou des lettres comprises entre A et F (par exemple : #28e43f).";
            return 0;
        }
    }

    event.preventDefault();
    const nouvelle_couleur = document.querySelector('#new_color');
    const ancienne_couleur = document.querySelector('#after');
    let params = {};
    //envoie des param au serveur
    if (nouvelle_couleur.value)
        params['nouvelle_couleur'] = nouvelle_couleur.value;
    if (ancienne_couleur.innerHTML)
        params['ancienne_couleur'] = ancienne_couleur.innerHTML;
    var body = JSON.stringify(params);
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var response = JSON.parse(request.responseText);
                alert("Changement enregistré!");
                window.location.reload();
            }
        }
    }
    //appel vers requête php d'insertion
    request.open("POST", "../php/set_color.php", true);
    request.send(body);


    if (new_color_value.substring(0, 1) == '#') {
        if (new_color_value.length != 7) {
            p_error.innerHTML = "La couleur entrée n'est pas sous forme hexadécimal, elle doit contenir 6 caractères après le # (par exemple : #28e43f).";
        } else root.style.setProperty('--couleur_ferme', new_color_value);
    } else {
        if (new_color_value.length != 6) {
            p_error.innerHTML = "La couleur entrée n'est pas sous forme hexadécimal, elle doit contenir 6 caractères (par exemple : #28e43f).";
        } else root.style.setProperty('--couleur_ferme', '#' + new_color_value);
    }
});

document.ready(() => {
    event.preventDefault();
    //affiche partie page
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var response = JSON.parse(request.responseText);
                if (response.substring(0, 1) == '#') {
                    if (document.getElementById("after"))
                        document.getElementById("after").innerHTML = response;
                    root.style.setProperty('--couleur_ferme', response);
                } else {
                    if (document.getElementById("after"))
                        document.getElementById("after").innerHTML = '#' + response;
                    root.style.setProperty('--couleur_ferme', '#' + response);
                }

            }

        }
    }
    //appel vers requête php de chargement
    request.open("GET", "../php/get_couleur.php", true);
    request.send();

    if (document.getElementById("help_btn")) {
        var display_help = document.getElementById("help_btn");
        display_help.addEventListener("click", help);
    }

    if (document.getElementById("close_help_btn")) {
        var close_help_btn = document.getElementById("close_help_btn");
        close_help_btn.addEventListener("click", close_help);
    }

    var request2 = new XMLHttpRequest();

    request2.onreadystatechange = () => {
        if (request2.readyState == 4) {
            if (request2.status == 200) {
                var response = JSON.parse(request2.responseText);
                document.getElementById("titre_page").innerHTML = response[0][1].replace('<br>', '');
                var st = response[0][2].replace('<br>', '');
                JSON.stringify(st);
                var html = bbcodeParser.bbcodeToHtml(st);
                document.getElementById("description").innerHTML = html;
            }

        }
    }
    //appel vers requête php de chargement
    request2.open("GET", "../php/get_info_page.php", true);
    request2.send();


});

function help() {
    var help_window = document.getElementById("aide");
    help_window.classList.remove("hide");

    var couleur = document.getElementById("couleur");
    var accordeon = document.getElementById("accordeon");
    couleur.classList.add("hide");
    accordeon.classList.add("hide");

}

function close_help() {
    var help_window = document.getElementById("aide");
    help_window.classList.add("hide");

    var couleur = document.getElementById("couleur");
    var accordeon = document.getElementById("accordeon");
    couleur.classList.remove("hide");
    accordeon.classList.remove("hide");
}