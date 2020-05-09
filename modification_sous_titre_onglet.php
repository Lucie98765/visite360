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
	if($json_obj['sous_titre']==='<br>'){
		echo json_encode('Changement non-enregistré : champ vide');
		exit();	
	}
	$onglet = $json_obj['onglet'];
	$sous_titre = $json_obj['sous_titre'];

	$stmt = $bdd->prepare(<<<SQL
		UPDATE Sous_titre
		SET texte_sous_titre = :sous_titre
		WHERE id_onglet = (SELECT id_onglet FROM Onglet WHERE nom_onglet = :onglet)
SQL);

	$stmt->execute(array(':sous_titre' => $sous_titre,':onglet'=>$onglet));


	echo json_encode('Changement enregistré');
}




exit();

?>	