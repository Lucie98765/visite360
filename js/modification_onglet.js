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


function modification_sous_titre_onglet(id_bouton,id_onglet,id_sous_titre){
	$(document.body).on('click',id_bouton,function(){
	//let valid = document.getElementById("submit_modification");
		event.preventDefault();
		const onglet = document.querySelector(id_onglet);
		const sous_titre = document.querySelector(id_sous_titre);
		let params = {};
		//envoie des param au serveur
		if(onglet.innerHTML)
			params['onglet'] = onglet.innerHTML;
		if(sous_titre.innerHTML)
			params['sous_titre'] = sous_titre.innerHTML;
		var body = JSON.stringify(params);
		var request = new XMLHttpRequest();
		request.onreadystatechange = () => {
			if(request.readyState == 4) {
				if(request.status == 200){
                    console.log(request);
					var response = JSON.parse(request.responseText);
					alert(response);
					window.location.reload();
				}
			}
		}
		//appel vers requête php d'insertion
		request.open("POST", "../php/modification_sous_titre_onglet.php",true);
		request.send(body);
	});
}

function modification_texte_onglet(id_bouton,id_onglet,id_texte){
	$(document.body).on('click',id_bouton,function(){
	//let valid = document.getElementById("submit_modification");
		event.preventDefault();
		const onglet = document.querySelector(id_onglet);
		const texte = document.querySelector(id_texte);
		let params = {};
		//envoie des param au serveur
		if(onglet.innerHTML)
			params['onglet'] = onglet.innerHTML;
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
		request.open("POST", "../php/modification_texte_onglet.php",true);
		request.send(body);
	});
}

document.ready(() =>{
	event.preventDefault();
	//affiche partie page
	var request = new XMLHttpRequest();
	request.onreadystatechange = () => {
		if(request.readyState == 4) {
			if(request.status == 200)
			{
				var response = JSON.parse(request.responseText);
				for (var i = 0; i < Object.keys(response).length; i++) {
					modification_sous_titre_onglet('#'+response[i]+'_button_sous_titre','#'+response[i],'#'+response[i]+'_sous_titre');
					modification_texte_onglet('#'+response[i]+'_button_texte','#'+response[i],'#'+response[i]+'_texte');		
				}
			}
		
		}
	}
	//appel vers requête php de chargement
	request.open("GET", "../php/get_nom_onglet.php",true);
	request.send();
});

