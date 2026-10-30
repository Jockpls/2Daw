<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tema = $_POST["tema"];
    $idioma = $_POST["idioma"];

    setcookie("tema", $tema, time() + 604800, "/ver.php", $secure = true, $httponly = true);
    setcookie("idioma", $idioma, time() + 604800, "/ver.php",  $secure = true, $httponly = true);
}

header("Location: ver.php")
?>
