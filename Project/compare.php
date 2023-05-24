<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$db = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}

$query = "SELECT name, password FROM user WHERE name = '{$data['name']}'";
$result = mysqli_query($db, $query);
$user = mysqli_fetch_assoc($result);

$response = [];
if ($user) {
  $response['userExists'] = true;
  $response['passwordMatch'] = $data['password'] === $user['password'];


  /*to check if they both the same in console LOGGG
  $response['passwordSent'] = $data['password'];
  $response['passwordStored'] = $user['password'];*/
} else {
  $response['userExists'] = false;
}

echo json_encode($response);

mysqli_close($db);
?>
