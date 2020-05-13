<?php
// headers
header("Content-Type: application/json; charset=UTF-8");


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
	SELECT *
	FROM Page
SQL
);

$stmt->execute();
$page = $stmt->fetchAll();

echo json_encode($page);
exit();
?>