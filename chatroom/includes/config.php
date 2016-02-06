<?php
$con = mysql_connect('localhost', 'chatroomuser', '5AjsYuYuGqst9d2B');
   mysql_select_db("chatroom", $con);
   if (!$con)
   {
   die('Could not connect: ' . mysql_error());
   }
?>
