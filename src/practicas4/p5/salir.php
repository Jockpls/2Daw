<?php
session_start();

if(!$_SERVER["REQUEST_METHOD"] == "POST"){
    die("Error: solo se puede acceder por el método post");
}

session_unset();

if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,);
}

session_destroy();

header('Location: login.php');
exit();
?>

