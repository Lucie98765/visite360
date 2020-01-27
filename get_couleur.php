<?php
// headers
header("Content-Type: application/json; charset=UTF-8");

session_start();
if (!isset($_SESSION['id_user'])){
	echo 'User non connecté';
	http_response_code(422);
	exit();
}

// check HTTP method
$method = strtolower($_SERVER['REQUEST_METHOD']);

if ($method !== 'post') {
	http_response_code(405);
	echo json_encode(array('message' => 'This method is not allowed.'));
	exit();
}

// include data
include_once "BDD/visite_360.pdo.php";

// response status
http_response_code(200);

$result = [];

//requête sql pour récupérer tout ce qu'il y a dans la table couleur
$stmt = $bdd->prepare(<<<SQL
	SELECT DISTINCT couleur
	FROM Couleur
SQL
);

$stmt->execute();
$color = $stmt->fetchAll();

//on renvoie les réponses de la requête en JSON pour que le client puisse récupérer les informations et les afficher
echo json_encode($color[0]['couleur']);
exit();
?>