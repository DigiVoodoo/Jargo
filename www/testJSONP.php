<?php 
header("content-type: application/json; charset=utf-8");
header("access-control-allow-origin: *");

$to          = "sovalopivia@gmail.com";
$subject     = "Jargo Feedback";
$headers     = "From: sovalopivia@gmail.com";
$userEmail   = filter_var($_GET['email'],    FILTER_SANITIZE_EMAIL);
$userName    = filter_var($_GET['name'],     FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_HIGH);
$userSubject = filter_var($_GET['subject'],  FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_HIGH);
$userMessage = filter_var($_GET['message'],  FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_HIGH);
$text        = "\r\n FROM: "       . $userName
            .  "\r\n EMAIL: "      . $userEmail
            .  "\r\n SUBJECT: "    . $userSubject
            .  "\r\n MESSAGE:\r\n" . $userMessage;




$status = "test";

$a = array('status'    => $status,
           'to'        => $to,
           'subject'   => $subject,
           'text'      => $text,
           'headers'   => $headers);

if(!filter_var($userEmail, FILTER_VALIDATE_EMAIL))
{
    $a['status'] = "INVALID EMAIL";
    exit($_GET['callback'] . "('" . json_encode($a)  . "')");
}

if(mail($to,$subject,$text,$headers))
{
    $a['status'] = "SEND SUCCESS";
} else {
    $a['status'] = "SEND FAIL";
}

echo $_GET['callback'] . "('" . json_encode($a)  . "')";

?>