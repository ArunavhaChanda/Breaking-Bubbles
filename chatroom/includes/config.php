<?php
error_reporting(E_ERROR | E_PARSE);
$con = mysql_connect('localhost', 'chatroomuser', '123456');
   mysql_select_db("chatroom", $con);
   if (!$con)
   {
   die('Could not connect: ' . mysql_error());
   }
?>
