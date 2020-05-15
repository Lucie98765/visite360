// document ready in ES6
Document.prototype.ready = callback => {
	if(callback && typeof callback === 'function') {
		document.addEventListener("DOMContentLoaded", () =>  {
			if(document.readyState === "interactive" || document.readyState === "complete") {
				return callback();
			}
		});
	}
};

document.ready( () => {
	event.preventDefault();
	//affiche partie page
	let nouveau_titre = document.querySelector('#nouveau_titre');
	nouveau_titre.setAttribute("required","required");
	let ancien_titre=document.querySelector('#titre');
	let texte=document.querySelector('#texte');
	var request = new XMLHttpRequest();
	request.onreadystatechange = () => {
		if(request.readyState == 4) {
			if(request.status == 200)
			{
				var response = JSON.parse(request.responseText);
				nouveau_titre.innerHTML = response['titre'];
				ancien_titre.innerHTML = response['titre'];
				texte.innerHTML = response['texte'];
			}
		
		}
	}
	//appel vers requête php de chargement
	request.open("POST", "../php/chargement.php",true);
	request.send();

	//affiche partie onglet
	event.preventDefault();
	let content = document.querySelector('#content');
	let onglet = document.querySelector('.onglet');
	var request2 = new XMLHttpRequest();
	var titre_onglet, div1;
	request2.onreadystatechange = () => {
		if(request2.readyState == 4) {
			if(request2.status == 200)
			{
				var response = JSON.parse(request2.responseText);
				for (var i = 0; i < Object.keys(response).length; i++) {
					var titre_onglet = document.createElement("h2");
					var span = document.createElement("span");
					span.innerHTML = response[i]['nom_onglet'];
					span.setAttribute("id",response[i]['nom_onglet']);
					titre_onglet.appendChild(span);

					var fleche = document.createElement("img");
					fleche.setAttribute("src","../images/fleche.png");
					fleche.classList.add("fleche");
					titre_onglet.appendChild(fleche);
					content.appendChild(titre_onglet);

					var div1 = document.createElement("div");
					div1.classList.add("onglet","replier");
					content.appendChild(div1);

					
					var sous_titre = document.createElement("h3");
					sous_titre.innerHTML = "Sous-titre";
					div1.appendChild(sous_titre);

					var div2 = document.createElement("div");
					div2.classList.add("modif");
					div1.appendChild(div2);

					var sous_titre_contenu = document.createElement("p");
					sous_titre_contenu.setAttribute("contenteditable","true");
					sous_titre_contenu.setAttribute("required","required");
					sous_titre_contenu.innerHTML = response[i]['sous_titre'];
					sous_titre_contenu.setAttribute("id",response[i]['nom_onglet']+"_sous_titre");
					div2.appendChild(sous_titre_contenu);

					var button_sous_titre = document.createElement("button");
					button_sous_titre.setAttribute("type","button");
					button_sous_titre.setAttribute("id",response[i]['nom_onglet']+"_button_sous_titre");
					button_sous_titre.innerHTML = "Enregistrer";
					div2.appendChild(button_sous_titre);

					var texte_titre = document.createElement("h3");
					texte_titre.innerHTML = "Texte";
					div1.appendChild(texte_titre);


					var div3 = document.createElement("div");
					div3.classList.add("modif");
					div1.appendChild(div3);

					var texte_contenu = document.createElement("p");
					texte_contenu.setAttribute("contenteditable","true");
					texte_contenu.setAttribute("required","required");
					texte_contenu.innerHTML = response[i]['texte'];
					texte_contenu.setAttribute("id",response[i]['nom_onglet']+"_texte");
					div3.appendChild(texte_contenu);

					var button_texte = document.createElement("button");
					button_texte.setAttribute("type","button");
					button_texte.innerHTML = "Enregistrer";
					button_texte.setAttribute("id",response[i]['nom_onglet']+"_button_texte");
					div3.appendChild(button_texte);
				}			
			}
		}
	}
	request2.open("GET", "../php/get_onglet.php",true);
	request2.send();
});


//modification page titre
document.getElementById("submit_modification_titre").onclick = event => {
	event.preventDefault();
	const nouveau_titre = document.querySelector('#nouveau_titre');
	const ancien_titre=document.querySelector('#titre');
	let params = {};
	//envoie des param au serveur
	if(nouveau_titre.innerHTML)
		params['nouveau_titre'] = nouveau_titre.innerHTML;
	if(ancien_titre.innerHTML)
		params['ancien_titre'] = ancien_titre.innerHTML;
	var body = JSON.stringify(params);
	var request = new XMLHttpRequest();
	request.onreadystatechange = () => {
		if(request.readyState == 4) {
			if(request.status == 200)
			{
				var response = JSON.parse(request.responseText);
				alert(response);
				window.location.reload();
			}
		}
	}
	//appel vers requête php d'insertion
	request.open("POST", "../php/enregistrer.php",true);
	request.send(body);
};
//modification onglet texte
document.getElementById("submit_modification_texte").onclick = event => {
	event.preventDefault();
	const titre=document.querySelector('#titre');
	const texte = document.querySelector('#texte');
	let params = {};
	//envoie des param au serveur
	if(titre.innerHTML)
		params['titre'] = titre.innerHTML;
	if(texte.innerHTML)
		params['texte'] = texte.innerHTML;
	var body = JSON.stringify(params);
	var request = new XMLHttpRequest();
	request.onreadystatechange = () => {
		if(request.readyState == 4) {
			if(request.status == 200)
			{
				var response = JSON.parse(request.responseText);
				alert(response);
				window.location.reload();
			}
		}
	}
	//appel vers requête php d'insertion
	request.open("POST", "../php/enregistrer_texte.php",true);
	request.send(body);

};

