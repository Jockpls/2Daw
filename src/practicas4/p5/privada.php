<?php
session_start();

if (isset($_SESSION['usuario'])){
    $nombre = htmlspecialchars($_SESSION['usuario']);
    } else {
        die("Error: pichonnn");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bienvenido a tu area privada <?= $nombre ?></h1>
    <form action="salir.php" method="POST">
        <input type="submit" value="salir">
    </form>

</body>
</html>
