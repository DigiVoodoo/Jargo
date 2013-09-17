<?php

if (isset($_POST['name']) &&
    isset($_POST['email']) &&
    isset($_POST['subject']) &&
    isset($_POST['message'])) 
{
  $name      = filter_input(INPUT_POST, 'name',    FILTER_SANITIZE_STRING);
  $email     = filter_input(INPUT_POST, 'email',   FILTER_SANITIZE_EMAIL);
  $subject   = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
  $message   = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
  $adminFrom = "sovalopivia@gmail.com";
  $adminTo   = "sovalopivia@gmail.com";
  
  $output  = "name = ";
  $output .= $name; 
  $output .= "<br>" . "email = ";
  $output .=  $email;
  $output .= "<br>" . "subject = ";
  $output .=  $subject;
  $output .= "<br>" . "message = ";
  $output .=  $message;
  $output .=  "<br><br>";
  
  $headers  = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
  $headers .= "From: " . $adminFrom . "\r\n";
  
  
  print( $output );
  print( $headers );
  
  mail($adminTo,$email .": ". $subject,$message,$headers);

  header('Location: http://www.sovatest.netai.net/redirect.html');
  exit;
}
else 
{
  echo"no email found !!!  ";
  header('Location: http://www.sovatest.netai.net/redirect.html');
  exit;
}


?>
