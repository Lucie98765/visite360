<?php	

	try
	{
		// On se connecte à MySQL
		$bdd = new PDO('mysql:host=localhost;dbname=visite_360;charset=utf8', 'root', 'root');
	}
	catch(Exception $e)
	{
		// En cas d'erreur, on affiche un message et on arrête tout
	        die('Erreur : '.$e->getMessage());
	}

?>	