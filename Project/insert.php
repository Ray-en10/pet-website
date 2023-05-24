<?php
header("Access-Control-Allow-Origin:  *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->name) || !isset($data->email) || !isset($data->password)) {
    $response['data']=array('status'=>'invalid', 'message'=>'Please provide name, email, and password.');
    echo json_encode($response);
    exit;
}

$name = $data->name;
$email = $data->email;
$password = $data->password;


$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbname = "test";

$con = mysqli_connect($servername, $username, $dbpassword, $dbname);

if (!$con) {
    $response['data']=array('status'=>'invalid', 'message'=>'Error connecting to database: '.mysqli_connect_error());
    echo json_encode($response);
    exit;
}

mysqli_select_db($con,$dbname);
$sql = "INSERT INTO user (name, email, password) VALUES ('$name', '$email', '$password')";

$result = mysqli_query($con,$sql);

if($result)
{
    $response['data']=array('status'=>'valid');
    echo json_encode($response);
}
else
{
    $response['data']=array('status'=>'invalid', 'message'=>mysqli_error($con));
    echo json_encode($response);
}