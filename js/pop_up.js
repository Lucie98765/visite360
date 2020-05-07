"use strict";
let lieu ;

Document.prototype.ready = callback => {
	if(callback && typeof callback === 'function') {
		document.addEventListener("DOMContentLoaded", () =>  {
			if(document.readyState === "interactive" || document.readyState === "complete") {
				return callback();
			}
		});
	}
};

$(document.body).on('click','.info',function(){
	lieu = $(this).attr('lieu');
	let titre = document.querySelector("#titre");
	let text = document.querySelector("#text");
	let sous_titre = document.querySelector("#sous_titre");
	//let slide = document.querySelector("#slide");
	event.preventDefault();
	var request = new XMLHttpRequest();
	request.onreadystatechange = () => {
		if(request.readyState == 4) {
			if(request.status == 200)
			{
				var response = JSON.parse(request.responseText);
				//titre
				titre.innerHTML= response[lieu]['titre'];
				//texte
				var st = response[lieu]['sous_titre'][0];
				JSON.stringify(st);
				var html = bbcodeParser.bbcodeToHtml(st);
				sous_titre.innerHTML = html;
				st = response[lieu]['texte'][0];
				JSON.stringify(st);
				html = bbcodeParser.bbcodeToHtml(st);
				text.innerHTML = html;
			}
		
		}
	}  
	//appel vers requête php de chargement
	request.open("GET", "get_content_pop_up.php",true);
	request.send();
	
});

$(document.body).on('click','#fermerTexte',function(){
	lieu='';
});

$(document.body).on('click','#pFermer',function(){
	lieu='';
});

let i = 0;
$(document.body).on('click','.archive',function(){
	let nb_photo = 0;
	//console.log($(this).attr('lieu'));
	document.querySelector('.next').classList.add('visible');
	document.querySelector('.next').classList.remove('invisible');


	lieu = $(this).attr('lieu');
	let images = document.querySelectorAll(".image");
	//console.log(images);
	event.preventDefault();
	var request = new XMLHttpRequest();
	request.onreadystatechange = () => {
		if(request.readyState == 4) {
			if(request.status == 200)
			{
				var response = JSON.parse(request.responseText);
				var nb_photos = response[lieu]['photo'].length;
				var photos = response[lieu]['photo'];
				for (var i = 0; i < nb_photos; i++) {
					images[i].parentElement.classList.remove('invisible');
					images[i].parentElement.classList.add('visible');
					images[i].setAttribute("src","images/photos/"+photos[i]);	
				}
				for(var i = nb_photos; i<images.length; i++){
					images[i].parentElement.classList.add('invisible');
					images[i].parentElement.classList.remove('visible');
				}
				if(nb_photos===1){
					document.querySelector('.prev').classList.add('invisible');
					document.querySelector('.prev').classList.remove('visible');
					document.querySelector('.next').classList.add('invisible');
					document.querySelector('.next').classList.remove('visible');
				}

				var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
			    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
			    indexImg = $img.length - 1, // on définit l'index du dernier élément
			    i=0, // on initialise un compteur
			    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
			    $img.css('display', 'none'); // on cache les images
				$currentImg.css('display', 'block'); // on affiche seulement l'image courante

				$('.next').click(function(){ // image suivante

				    i++; // on incrémente le compteur

				    if( i <= indexImg ){
				    	document.querySelector('.prev').classList.add('visible');
						document.querySelector('.prev').classList.remove('invisible');
				    	
				        $img.css('display', 'none'); // on cache les images
				        $currentImg = $img.eq(i); // on définit la nouvelle image
				        $currentImg.css('display', 'block'); // puis on l'affiche
				        
				    }
				    else{
				        i = indexImg;

				    }
				    if(i===nb_photos-1){
				    	document.querySelector('.next').classList.add('invisible');
						document.querySelector('.next').classList.remove('visible');
				    }
				    if(i===0){
				    	document.querySelector('.prev').classList.add('invisible');
						document.querySelector('.prev').classList.remove('visible');
					}

				});
				$('.prev').click(function(){ // image précédente
				    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

				    if( i >= 0 ){
				        $img.css('display', 'none');
				        $currentImg = $img.eq(i);
				        $currentImg.css('display', 'block');
				        
				    }
				    else{
				        i = 0;
				    }
				    if(i<nb_photos-1){
				    	document.querySelector('.next').classList.add('visible');
						document.querySelector('.next').classList.remove('invisible');
				    }

				    if(i===0){
				    	document.querySelector('.prev').classList.add('invisible');
						document.querySelector('.prev').classList.remove('visible');
					}

				});
				
			}
		
		}
	}  
	//appel vers requête php de chargement
	request.open("GET", "get_content_pop_up.php",true);
	request.send();
	$("#carrousel").removeClass("invisible").addClass("visible");
	




});

$(document.body).on('click','.fermer',function(){
	lieu = '';
	$("#carrousel").removeClass("visible").addClass("invisible");
	i = 0;
     $("#filter").removeClass("visible").addClass("invisible");
});