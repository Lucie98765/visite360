<?php
session_start(); 
//headers
header("Content-Type: application/json; charset=UTF-8");
//Check HTTP method
$method = strtolower($_SERVER["REQUEST_METHOD"]);
if($method !== "get") {
    http_response_code(405);
    echo json_encode(array("message" => "This method is not allowed."));
    exit();
}

http_response_code(200);

//destruction des sessions
session_unset();
session_destroy();

//envoie des infos au client
//echo json_encode(array("message" => "Logout succeed"));
header('Location: login.php');
exit();
?>