<?php
require('includes/init.php');
if(check_login()==true){
	header('location: chat/chat.php');
}
?>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="images/regform.css">
</head>
<body>
<<<<<<< HEAD:Chatroom-master/index.php
	<table>
	<tr>
	<form action="chat/chat.php" method="POST" >
	<td><input type='text' name='user' class = "pure-form-message-inline" placeholder="Enrollment No."/></td>
	</tr>
	<tr>
	<td><input type='text' name='user' class = "pure-form-message-inline" placeholder="Password"/></td>	</tr>

	<tr>
		<td><input type='submit' name="login" value="Login" class = "pure-form-message"/>        <a href='reg.php' class = "pure-form-message">Sign Up</a></td>
	</tr>

	</form>
	</table>
</body>
</html>
