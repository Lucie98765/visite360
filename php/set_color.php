<?php
// headers
header("Content-Type: application/text; charset=UTF-8");
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
include_once "../BDD/visite_360.pdo.php";

// response status
http_response_code(200);

$json = file_get_contents('php://input');

$json_obj = json_decode($json,true);

if (!isset($json_obj) || empty($json_obj)) {
		echo json_encode("Paramètre manquant".$json_obj);
    	http_response_code(422);
    	exit();	
} else {

	$ancienne_couleur = $json_obj['ancienne_couleur'];
	$nouvelle_couleur = $json_obj['nouvelle_couleur'];

	$stmt = $bdd->prepare(<<<SQL
		UPDATE Couleur
		SET couleur = :nouvelle_couleur
SQL
                         );

	$stmt->execute(array(':nouvelle_couleur' => $nouvelle_couleur));
	echo json_encode($nouvelle_couleur);
}




exit();

?>