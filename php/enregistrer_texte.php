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
include_once "BDD/visite_360.pdo.php";

// response status
http_response_code(200);

$json = file_get_contents('php://input');

$json_obj = json_decode($json,true);

if (!isset($json_obj) || empty($json_obj)) {
		echo json_encode("Paramètre manquant".$json_obj);
    	http_response_code(422);
    	exit();	
}
else{

	$titre = $json_obj['titre'];
	$texte = $json_obj['texte'];

	$stmt = $bdd->prepare(<<<SQL
		UPDATE Page
		SET texte_page = :texte
		WHERE titre_page = :titre
SQL);

	$stmt->execute(array(':texte' => $texte,':titre'=>$titre));


	echo json_encode('Changement enregistré');
}




exit();

?>	 