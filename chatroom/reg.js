var username;
var enrollment;
var password;

function autoreg() {
        username = "chatter" + Math.random();
        enrollment = Math.random();
        password = Math.random();
        $.ajax({url:"submit.php", type:"POST", data:""+username+"", dataType:"text"});
        $.ajax({url:"submit.php", type:"POST" data:""+
