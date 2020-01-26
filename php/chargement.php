<?php
// headers
header("Content-Type: application/text; charset=UTF-8");

session_start();
if (!isset($_SESSION['id_user'])){
	echo 'User non connecté';
	http_response_code(422);
	exit();
}

// include data
include_once "BDD/visite_360.pdo.php";

// response status
http_response_code(200);


$stmt = $bdd->prepare(<<<SQL
	SELECT *
	FROM Page
SQL);

	$stmt->execute();
	//$donnees = $result->fetch(); 
	$result = $stmt->fetchAll();

	echo json_encode(array('titre'=>$result[0]['titre_page'],'texte'=>$result[0]['texte_page']));


?>