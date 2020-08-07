<?php
$to = 'kamilshape@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$subject = 'PN' . $_POST['subject'] . 'od' . $_POST['email'];
$message =$_POST['message'];
$headers = 'Content-Type: text/html; charset=utf-8' . "\r\n";
$headers = 'Od ' . $_POST['email'];
mail($to, $email, $subject, $message, $headers)
?>