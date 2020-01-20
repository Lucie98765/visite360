<?php 
	// headers
	header("Content-Type: application/json; charset=UTF-8");

	$method = strtolower($_SERVER['REQUEST_METHOD']);
	if ($method !== 'post') {
		http_response_code(405);
		echo json_encode(array('message' => 'This method is not allowed.'));
		exit();
	}

	include_once "BDD/mypdo.php";

	http_response_code(200);

	$input = file_get_contents('php://input');

	if (!isset($input) || empty($input)) {
		echo json_encode("Paramètre manquant".$input);
    	http_response_code(422);
    	exit();
	}
	else{
		$json_obj = json_decode($input,true);

		if(!isset($json_obj['name'])){
			echo json_encode("Nom d'utilisateur manquant");
			http_response_code(422);
			exit();
		}
		if(!isset($json_obj['password'])){
			echo json_encode("Mot de passe manquant");
			http_response_code(422);
			exit();
		}

		//variables
	    $username = $json_obj['name'];
	    $pwd = $json_obj['password'];

	    $stmt_user = $bdd->prepare(<<<SQL
		SELECT id_user, password 
		FROM utilisateur 
		WHERE username = :username
SQL
);
    $stmt_user->execute(array(':username' => $username));
	$resultat = $stmt_user->fetch();
	}

	if(md5($pwd)!=$resultat['password']) {
        http_response_code(422);
        echo json_encode("Mauvais identifiant ou mot de passe");
        exit();
    }

    if (!session_id())
        session_start();
            
    //définitions des variables de session
    $_SESSION['username'] = $row['name'];
    $_SESSION['id_user']= $row['id_user'];

    $resp = array("id_user" => $row['id_user'], "username" => $username);
    //envoie des infos au client
    echo json_encode($resp);
    

	exit();

?>