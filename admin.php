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
</head>
<body>
    <header>
        <a href="https://www.lafermedubuisson.com" id="logo_gauche"><img src="images/logo_troue.png" alt="logo pour retourner à l'accueil" /></a>
        <a href="logout.php" id="bouton_deco"><img src="images/deco.png" alt="bouton pour se déconnecter" /></a>
        <h1>Interface administrateur</h1>
    </header>
    <main>
        <img src="images/help.png" alt="bouton d'aide" id="help_btn" />
        <div id="aide" class="hide">
            <h2>Aide <img src="images/close_help.png" alt="bouton permettant de fermer la fenêtre d'aide" id="close_help_btn"/></h2>
            <ul>
                <li>
                    <p>Pour intégrer un lien : [url={votre lien}]{texte cliquable}[/url] </p>
                    <p>Par exemple : [url={https://www.lafermedubuisson.com}]{Le site web de la Ferme du Buisson}[/url] </p>
                    <p>donnera : <a href="https://www.lafermedubuisson.com">Le site web de la Ferme du Buisson</a> </p>
                </li>
                <li>
                    <p>Pour mettre un texte en gras : [b]{TEXT}[/b]</p>
                    <p>Par exemple : Le Théâtre se trouve [b]{au coeur du bâtiment central}[/b] de la Ferme du Buisson.</p>
                    <p>donnera : Le Théâtre se trouve <strong>au coeur du bâtiment central</strong> de la Ferme du Buisson.</p>
                </li>
                <li>
                    <p>Pour mettre un texte en italique : [i]{TEXT}[/i]</p>
                    <p>Par exemple : Le Théâtre se trouve [i]{au coeur du bâtiment central}[/i] de la Ferme du Buisson.</p>
                    <p>donnera : Le Théâtre se trouve <em>au coeur du bâtiment central</em> de la Ferme du Buisson.</p>
                </li>
                <li>
                    <p>Pour souligner un texte : [u]{TEXT}[/u]</p>
                    <p>Par exemple : Le Théâtre se trouve [u]{au coeur du bâtiment central}[/u] de la Ferme du Buisson.</p>
                    <p>donnera : Le Théâtre se trouve <span style="text-decoration:underline;">au coeur du bâtiment central</span> de la Ferme du Buisson.</p>
                </li>
            </ul>
        </div>
        <div id="couleur">
            <div>
                <h4>Couleur principale actuelle&nbsp: </h4>
                <p id="after">#28e43f</p>
            </div>
            <div>
                <h4>Changer la couleur principale&nbsp: </h4>
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
                        <p contenteditable="true" id="nouveau_titre">Nouveau titre</p>
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
