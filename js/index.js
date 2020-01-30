var pouet = "pouet";

$(document).ready(function(){
        $("canvas").prependTo("iframe");
        $("canvas").addClass("visible");
        //$("canvas").addClass("invisible");
        //enlève
        $("#pTexte").removeClass("visible").addClass("invisible");
        $("#p360").css("position","absolute");
        
    
        /*Lieux*/
    
        $("#cible_ac_theatre , #lieu_ac_theatre").click(function(e){
            e.preventDefault();  
            $("iframe").attr("src","app/index1.html");
        });
    
        $("#cible_ac_centre").click(function(e){
            e.preventDefault();  
            $("iframe").attr("src","app/index2.html");
        });
    
        $("#cible_ac_auvent, #lieu_ac_auvent").click(function(e){
            e.preventDefault();  
            $("iframe").attr("src","app/index3.html");
        });
    
        $("#cible_salon_bonus, #lieu_salon_bonus").click(function(e){
            e.preventDefault();  
            $("iframe").attr("src","app/index4.html");
        });
    
        $("#cible_hall_cinema, #lieu_hall_cinema").click(function(e){
            e.preventDefault();  
            $("iframe").attr("src","app/index5.html");
        });
    
        $("#cible_ruches, #lieu_ruches").click(function(e){
            e.preventDefault();  
            $("iframe").attr("src","app/index6.html");
        });
    
        $("#cible_centre_art_expo").click(function(e){
            e.preventDefault();  
            $("iframe").attr("src","app/index7.html");
        });
    
        $("#cible_centre_art_expo2").click(function(e){
            e.preventDefault();  
            $("iframe").attr("src","app/index8.html");
        });
    
        $("#cible_centre_art, #lieu_centre_art").click(function(e){
            e.preventDefault();  
            $("iframe").attr("src","app/index9.html");
        });
    
        $("#cible_hall_theatre, #lieu_hall_theatre").click(function(e){
            e.preventDefault();  
            $("iframe").attr("src","app/index10.html");
        });
    
        $("#cible_salle_theatre, #lieu_salle_theatre").click(function(e){
            e.preventDefault();  
            $("iframe").attr("src","app/index11.html");
        });
    
         $("#cible_caravanserail").click(function(e){
            e.preventDefault();  
            $("iframe").attr("src","app/index12.html");
        });
            
    
    
        //Fermeture popup initial
        $("#cPopupInit").click(function(){
            $("#popupInit").removeClass("visible").addClass("invisible"); 
            $("#filter").removeClass("visible").addClass("invisible"); 
        });
    
        //Afficher le nom d'un lieu
        $(".cible").hover(function(){
            afficherLieu("#nom_lieu",this.id);
        });
    
        $(".info").hover(function(){
            afficherLieu("#nom_info",this.id);
        });
    
        $(".archive").hover(function(){
            afficherLieu("#nom_archive",this.id);
        });
        
        //Ouverture popup 360
        $("#theatre").click(function(e){
            e.preventDefault();
            $("#visite").removeClass("invisible").addClass("visible");
            $("#filter").removeClass("invisible").addClass("visible");
            
        });
        
        $(".cible").click(function(e){
            e.preventDefault();
            $("#visite").removeClass("invisible").addClass("visible");
            $("#filter").removeClass("invisible").addClass("visible");
            globalThis.pouet = "prout";
            console.log(globalThis.pouet);
        });
        
        $("#pFermer").click(function(){
            $("#visite").removeClass("visible").addClass("invisible");
            $("#filter").removeClass("visible").addClass("invisible");
            $("#slide").removeClass("visible").addClass("invisible");
        });
        
            //De vue 360 à photos historiques
            $("#photosHistoriques").click(function(){
                $("#photosHistoriques").removeClass("visible").addClass("invisible");
                $("#retour360").removeClass("invisible").addClass("visible");
                $("#slide").removeClass("invisible").addClass("visible");
                $("iframe").removeClass("visible").addClass("invisible");
            });
        
            //De photos historiques à vue 360
            $("#retour360").click(function(){
                $("#retour360").removeClass("visible").addClass("invisible");
                $("#photosHistoriques").removeClass("invisible").addClass("visible");
                $("#slide").removeClass("visible").addClass("invisible");
                $("iframe").removeClass("invisible").addClass("visible");
            });
        
            //fermer texte
            $("#fermerTexte").click(function(){
                removeText();
            });
        
            $("#info").click(function(){
                setText();
            });

        function removeText() { 
            //enlève la partie texte
                $("#pTexte").removeClass("visible").addClass("invisible");
        }
        
        function setText() { 
        
               //remet la partie texte
                $("#pTexte").removeClass("invisible").addClass("visible");
        }
    
        function afficherLieu(id_affiche,id_c){
            var alt = $("#"+id_c).attr("alt");
            $(id_affiche).html(alt);
            var posTop = $("#"+id_c).css("top");
            var posLeft = $("#"+id_c).css("left");
            var span_width = $(id_affiche).css("width");
            
            $(id_affiche).css("top", posTop);
            $(id_affiche).css("left", posLeft);
            
            $(id_affiche).css('top', (parseFloat($(id_affiche).css('top')) - 40) + 'px');
            $(id_affiche).css('left', (parseFloat($(id_affiche).css('left')))-parseFloat(span_width)/2-5 + 'px');
            $(id_affiche).removeClass("invisible").addClass("visible");
        }
       
});
    
