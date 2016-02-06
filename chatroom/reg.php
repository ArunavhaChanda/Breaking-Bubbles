<?php
$err = $_GET['err'];
$err_msg = "";
if($err!="") {
	switch($err) {
		case 0: $err_msg = "Incomplete form";
			break;
		case 1: $err_msg = "Passwords donot match";
			break;
		case 2: $err_msg = "Already registered or try different username";
			break;
		default:$err_msg = "";
			break;
	}
}
?>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="images/regform.css">
	</head>
<body>
	<table>
		 <form action='submit.php' method="POST" >
		<tr>
			<td><input type='text' name='user' class = "pure-form-message-inline" placeholder="Username"/></td>
		</tr>
		<tr>
			<td><input type='text' name='enroll' class = "pure-form-message-inline" placeholder="Enrollment No."/></td>	
		</tr>
		<tr>
			<td><input type='password' name='pass' class = "pure-form-message-inline" placeholder="Password" /></td>
		</tr>
		<tr>
			<td><input type='password' name='re-pass' class = "pure-form-message-inline" placeholder="Re-enter Password" /></td>
		</tr>
		<tr>
			<td><input type='submit' value='Register' class = "pure-form-message"/>        <a href = 'index.php' class = "pure-form-message" >Login</a></td>
		</tr>
		</form>
	</table>
</body>
</html>
