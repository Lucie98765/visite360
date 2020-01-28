$(document).ready(function(){
        $("canvas").prependTo("iframe");
        $("canvas").addClass("visible");
        //$("canvas").addClass("invisible");
        //enlève la partie texte
        $("#pTexte").removeClass("visible").addClass("invisible");
        $("#p360").css("position","absolute");
        
        //Fermeture popup initial
        $("#cPopupInit").click(function(){
            $("#popupInit").removeClass("visible").addClass("invisible"); 
            $("#filter").removeClass("visible").addClass("invisible"); 
        });
    
        //Afficher le nom d'un lieu
        $(".cible").hover(function(){
            afficherLieu(this.id);
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
    
        function afficherLieu(id_c){
            var alt = $("#"+id_c).attr("alt");
            $("#nom_lieu").html(alt);
            var posTop = $("#"+id_c).css("top");
            var posLeft = $("#"+id_c).css("left");
            var span_width = $("#nom_lieu").css("width");
            
            $("#nom_lieu").css("top", posTop);
            $("#nom_lieu").css("left", posLeft);
            
            $("#nom_lieu").css('top', (parseFloat($("#nom_lieu").css('top')) - 40) + 'px');
            $("#nom_lieu").css('left', (parseFloat($("#nom_lieu").css('left')))-parseFloat(span_width)/2-5 + 'px');
            $("#nom_lieu").removeClass("invisible").addClass("visible");
        }
       
});


    
