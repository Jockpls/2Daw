<?php
$tema = $_COOKIE["tema"];
$idioma = $_COOKIE["idioma"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cukiiiiss</title>
    <style>
        <?php if ($tema === "oscuro"):?>
            body {
                background-color: black;
            }
            h1 {
                color: white;
            }
         <?php endif ?>
    </style>
</head>
<body>
    <?php if ($idioma === "en"):?>
        <h1>This is the result of your kuKIIIISSSS</h1>
    <?php else:?>
        <h1>Esto es el resultado de tus KUKIIIIIIIS</h1>
    <?php endif ?>

    <form action="borrar.php" method="POST">
        <button type="submit">Restablecer</button>
    </form>

</body>
</html>
