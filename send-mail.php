<?php
/**
* Author: Luis Zuno
* Email: luis@luiszuno.com
* URL: http://www.luiszuno.com
* Version: 1.0.0 
* Modified By Vadivamai.in
**/

//vars
$subject = $_POST['subject'];
$to = explode(',', $_POST['to'] );

$from = $_POST['email'];

//data
$msg = "Name: "  .$_POST['name']    ."<br>\n";
$msg .= "Email: "  .$_POST['email']    ."<br>\n";
$msg .= "SrNo: "  .$_POST['SrNo']    ."<br>\n";
$msg .= "Comments: "  .$_POST['comments']    ."<br>\n";
//$msg .= "Sender IP: "  .$_SERVER['REMOTE_ADDR']    ."<br>\n";

//Headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: <".$from. ">" ;


//send for each mail
foreach($to as $mail){
   mail($mail, $subject, $msg, $headers);
}

?>
