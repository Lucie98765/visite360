"use strict";
let root = document.documentElement;

$(document.body).on('click','h2',function(){
	this.nextElementSibling.classList.toggle('replier');

});

$(document.body).on('click','input',function(){
	this.previousElementSibling.classList.toggle('photoSelec');
});

$(document.body).on('click','#color_button',function(){
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
	const ancienne_couleur=document.querySelector('#after');
	let params = {};
	//envoie des param au serveur
	if(nouvelle_couleur.value)
		params['nouvelle_couleur'] = nouvelle_couleur.value;
	if(ancienne_couleur.innerHTML)
		params['ancienne_couleur'] = ancienne_couleur.innerHTML;
	var body = JSON.stringify(params);
	console.log(body);
	var request = new XMLHttpRequest();
	request.onreadystatechange = () => {
		if(request.readyState == 4) {
			console.log(request.readyState);
			if(request.status == 200)
			{
				var response = JSON.parse(request.responseText);
				console.log(response);
				alert(response);
				window.location.reload();
			}
		}
	}
	//appel vers requête php d'insertion
	request.open("POST", "set_color.php",true);
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

document.ready( () => {
	event.preventDefault();
	//affiche partie page
	var request = new XMLHttpRequest();
	request.onreadystatechange = () => {
		console.log(request.readyState);
		console.log(request.status);
		if(request.readyState == 4) {
			if(request.status == 200)
			{
				var response = JSON.parse(request.responseText);
				if (response.substring(0, 1) == '#'){
					if (document.getElementById("after"))
						document.getElementById("after").innerHTML = response;
					root.style.setProperty('--couleur_ferme', response);					
				}

				else{
					if (document.getElementById("after"))
						document.getElementById("after").innerHTML = '#' + response;
					root.style.setProperty('--couleur_ferme', '#' + response);
				}
					
				console.log(response);
			}
		
		}
	}
	//appel vers requête php de chargement
	request.open("POST", "get_couleur.php",true);
	request.send();

});


