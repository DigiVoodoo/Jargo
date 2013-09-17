<?php 
header("content-type: application/json; charset=utf-8");
header("access-control-allow-origin: *");


$email   = $_GET['email'];
$name    = $_GET['name'];
$subject = $_GET['subject'];
$message = $_GET['message'];

$a = array('name'    => $name,
           'email'   => $email,
           'subject' => $subject,
           'message' => $message);

 
echo $_GET['callback'] . "('" . json_encode($a)  . "')" ;

?>