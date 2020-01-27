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

//requête sql pour récupérer tout ce qu'il y a dans la table catégorie
$stmt = $bdd->prepare(<<<SQL
	SELECT DISTINCT Onglet.nom_onglet
	FROM Onglet
	ORDER BY Onglet.nom_onglet
SQL
);

$stmt->execute();
$nom_onglet = $stmt->fetchAll();


//si le tableau est vide, c'est qu'il n'y a pas de catégories, il y a donc un problème
if(empty($nom_onglet)) {
	echo json_encode("Il manque le nom de l'onglet");
	http_response_code(422);
	exit();
}

$stmt2 = $bdd->prepare(<<<SQL
	SELECT DISTINCT Onglet.nom_onglet, Photo.photo
	FROM Onglet, Photo
	WHERE Onglet.nom_onglet = :value
	AND Onglet.id_onglet = Photo.id_onglet
SQL
);


$stmt3 = $bdd->prepare(<<<SQL
	SELECT DISTINCT Onglet.nom_onglet, Sous_titre.texte_sous_titre
	FROM Onglet, Sous_titre
	WHERE Onglet.nom_onglet = :value
	AND Onglet.id_onglet = Sous_titre.id_onglet
SQL
);

$stmt4 = $bdd->prepare(<<<SQL
	SELECT DISTINCT Onglet.nom_onglet, Texte.texte
	FROM Onglet, Texte
	WHERE Onglet.nom_onglet = :value
	AND Onglet.id_onglet = Texte.id_onglet
SQL
);

for ($i=0; $i <17 ; $i++) { 
	$value = $nom_onglet[$i]['nom_onglet'];
	$result[$i]['nom_onglet']=$value;
	$stmt2->execute(array(':value'=>$value));
	$photo = $stmt2->fetchAll();
	for ($j=0; $j <sizeof($photo) ; $j++) { 
		$result[$i]['photo'][$j]=$photo[$j]['photo'];
	}
	
	$stmt3->execute(array(':value'=>$value));
	$sous_titre = $stmt3->fetchAll();
		for ($j=0; $j <sizeof($sous_titre) ; $j++) { 
		$result[$i]['sous_titre'][$j]=$sous_titre[$j]['texte_sous_titre'];
	}

	$stmt4->execute(array(':value'=>$value));
	$texte = $stmt4->fetchAll();
		for ($j=0; $j <sizeof($texte) ; $j++) { 
		$result[$i]['texte'][$j]=$texte[$j]['texte'];
	}
}


//on renvoie les réponses de la requête en JSON pour que le client puisse récupérer les informations et les afficher
echo json_encode($result);
exit();
?>