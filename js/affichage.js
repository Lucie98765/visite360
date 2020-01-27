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
	let sous_titre = document.querySelector('#sous_titre');
	let nom_onglet=document.querySelector('#nom_onglet');
	let texte=document.querySelector('#texte');
	var request = new XMLHttpRequest();
	request.onreadystatechange = () => {
		if(request.readyState == 4) {
			//console.log(request.status);
			if(request.status == 200)
			{
				//console.log(request.status);
				var response = JSON.parse(request.responseText);

				nom_onglet.innerHTML = response[0]['nom_onglet'];
				//partie de la réponse qui correspond au sous titre qu'on stringify
				var st = response[0]['sous_titre'][0];
				JSON.stringify(st);
				//on convertie
				var html = bbcodeParser.bbcodeToHtml(st);
				//on affiche
				sous_titre.innerHTML = html;
			}
		
		}
	}
	//appel vers requête php de chargement
	request.open("POST", "../get_onglet.php",true);
	request.send();
});