<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style/style_log.css" />
    <link rel="icon" type="image/png" href="images/logo.png" />
    <title>Log page</title>
  </head>
  <body id ="login_page">
  	<div id="contener">
  		<img src="images/logo_fermedubuisson_blanc.png" id="logo">
  		<span id="description"> Connexion à l'interface admin de la visite 360 </span>
  		<form method="post" id="form">
		  <div class="form-example">
		    <input type="text" name="username" id="name" placeholder="Identifiant" required>
		  </div>
		  <div class="form-example">
		    <input type="password" name="password" id="password" placeholder="Mot de passe" required>
		  </div>
       <div id="error"></div>
		  <div class="form-example">
		    <input type="submit" id="submit" value="Valider">
		  </div>
		</form>
  	</div>
  	<script src="js/profile.js"></script>

  </body>
</html>


