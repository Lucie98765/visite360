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
	request.open("POST", "chargement.php",true);
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
					fleche.setAttribute("src","images/fleche.png");
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
					sous_titre_contenu.setAttribute("contenteditable","true")
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
					texte_contenu.innerHTML = response[i]['texte'];
					texte_contenu.setAttribute("id",response[i]['nom_onglet']+"_texte");
					div3.appendChild(texte_contenu);

					var button_texte = document.createElement("button");
					button_texte.setAttribute("type","button");
					button_texte.innerHTML = "Enregistrer";
					button_texte.setAttribute("id",response[i]['nom_onglet']+"_button_texte");
					div3.appendChild(button_texte);
					
					/*if(response[i]['photo']=== undefined){
						console.log('undifined');
					}
					else{
						var photo_titre = document.createElement("h3");
						photo_titre.innerHTML = "Photos historiques";
						div1.appendChild(photo_titre);

						var div4 = document.createElement("div");
						div4.classList.add("modif");
						div1.appendChild(div4);

						var div5 = document.createElement("div");
						div5.setAttribute("class","photos");
						div4.appendChild(div5);

						for (var j = 0; j < Object.keys(response[i]['photo']).length; j++) {
							var img = document.createElement("img");
							img.setAttribute("src","images/photos/"+response[i]['photo'][j]);
							div5.appendChild(img);	
							var input = document.createElement("input");
							input.setAttribute("type","checkbox");
							input.setAttribute("id",titre_onglet + j);
							input.setAttribute("name",titre_onglet + j);
							div5.appendChild(input);
						}

						var div6 = document.createElement("div");
						div6.setAttribute("id","div_boutons");
						div4.appendChild(div6);

                        var button_supp = document.createElement("button");
                        button_supp.setAttribute("type","button");
                        button_supp.setAttribute("id",response[i]['nom_onglet']+"_button_photo_supp");
                        button_supp.innerHTML =  "Supprimer les photos sélectionnées";
                        div6.appendChild(button_supp); 

                        var button_ajout = document.createElement("button");
                        button_ajout.setAttribute("type","button");
                        button_ajout.setAttribute("id",response[i]['nom_onglet']+"_button_photo_ajout");
                        button_ajout.innerHTML =  "Ajouter une photo";
                        div6.appendChild(button_ajout);

                        var button_modif_photo = document.createElement("button");
                        button_modif_photo.setAttribute("type","button");
                        button_modif_photo.setAttribute("id",response[i]['nom_onglet']+"_button_modif_photo");
                        button_modif_photo.innerHTML =  "Enregistrer";
                        div6.appendChild(button_modif_photo);*/
					//}
				}			
			}
		}
	}
	request2.open("POST", "get_onglet.php",true);
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
	request.open("POST", "enregistrer.php",true);
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
	request.open("POST", "enregistrer_texte.php",true);
	request.send(body);

};

