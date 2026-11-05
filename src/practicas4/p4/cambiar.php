<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrinchi</title>
</head>
<body>
<h1>Carrinchi</h1>
<h2>Cantidad de accesos hasta el momento:
    <?= $_SESSION["accesos"]?></h2>
</h2>
<form action="carrito.php" method="post">
<table border="1" cellpadding="10px">
    <thead>
    <th>Objeto</th>
    <th>Precio</th>
    <th>Cantidad actual</th>
    <th>Nueva cantidad</th>
    </thead>
    <tr>
        <td>Cuaderno</td>
        <td>2.50</td>
        <td><?=$_COOKIE["cuaderno"] ?></td>
        <td>
            <label for="cuaderno"></label>
            <input type="number" id="cuaderno" name="cuaderno" min="0" max="10" value="<?=$_COOKIE["cuaderno"] ?? ""?>">

        </td>
    </tr>
    <tr>
        <td>Lápiz</td>
        <td>0.80</td>
        <td><?=$_COOKIE["lapiz"] ?></td>
        <td>
            <label for="lapiz"></label>
            <input type="number" id="lapiz" name="lapiz" min="0" max="10" value="<?=$_COOKIE["lapiz"] ?? ""?>">
        </td>
    </tr>
    <tr>
        <td><?="Total actual: " . $_COOKIE["total"]?></td>
    </tr>
    </table>
    <button type="submit">Enviar</button>
</form>
</body>
</html>