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
if ($method !== 'get') {
	http_response_code(405);
	echo json_encode(array('message' => 'This method is not allowed.'));
	exit();
}

// include data
include_once "BDD/visite_360.pdo.php";

// response status
http_response_code(200);

$stmt = $bdd->prepare(<<<SQL
	SELECT nom_onglet
	FROM onglet
SQL
                     );

$stmt->execute();
$tmp_nom_onglet = $stmt->fetchAll();

$nom_onglet = [];
for ($i=0; $i < count($tmp_nom_onglet) ; $i++) { 
	$nom_onglet[$i] = $tmp_nom_onglet[$i]['nom_onglet'];
}


echo json_encode($nom_onglet);

exit();

?>	