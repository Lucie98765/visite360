<?php
session_start();
if (!isset($_SESSION['id_user'])){
    echo 'User non connecté';
    http_response_code(422);
    header('Location: login.php');
    exit();
}
?>
<!DOCTYPE html>

<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="images/icon.png">
    <link rel="stylesheet" type="text/css" href="style/acces_admin.css">
    <title>Accès administrateur</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- Mettre toutes les balises meta -->
</head>
<body>
    <header>
        <a href="https://www.lafermedubuisson.com" id="logo_gauche"><img src="images/logo_troue.png" alt="logo pour retourner à l'accueil" /></a>
        <a href="logout.php" id="bouton_deco"><img src="images/deco.png" alt="bouton pour se déconnecter" /></a>
        <h1>Interface administrateur</h1>
    </header>
    <main>
        <div id="couleur">
            <div>
                <h4>Couleur principale actuelle : </h4>
                <p id="after">#28e43f</p>
            </div>
            <div>
                <h4>Changer la couleur principale : </h4>
                <input type="text" placeholder="Code hexadécimal de la nouvelle couleur" id="new_color">
                <button id="color_button">Valider</button>
            </div>
            <p id="color_error"></p>
        </div>
        <div id="accordeon">
                <h2>Page : <span id="titre">Visite 360</span><img src="images/fleche.png" class="fleche"/></h2>
                <div class="onglet replier">
                    <h3>Titre</h3>
                    <div class="modif">
                        <p contenteditable="true" id="nouveau_titre">Coucou lol</p>
                        <button type="button" id="submit_modification_titre">Enregistrer</button>
                    </div>    
                    <h3>Texte</h3>
                    <div class="modif">
                        <p contenteditable="true"id="texte">Texte</p>
                        <button type="button" id="submit_modification_texte">Enregistrer</button>
                    </div>
                </div>
                <div id ='content'>
                </div>
        </div>
    </main>
    

    
</body>
<script src="js/bbcode_trad.js"></script>
<script src="js/modification.js"></script>
<script src="js/modification_onglet.js"></script>
<script src="js/display.js"></script>
</html>
