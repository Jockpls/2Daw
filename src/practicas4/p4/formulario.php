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
    <?php if($_SESSION["accesos"]){
        $_SESSION["accesos"] = $_SESSION["accesos"] + 1;
        echo $_SESSION["accesos"];
    }else{
        $_SESSION["accesos"] = 1;
        echo $_SESSION["accesos"];
    }   ?></h2>
</h2>
<form action="carrito.php" method="post">
<table border="1" cellpadding="10px">
    <thead>
    <th>Objeto</th>
    <th>Precio</th>
    <th>Cantidad</th>
    </thead>
    <tr>
        <td>Cuaderno</td>
        <td>2.50</td>
        <td>
            <label for="cuaderno"></label>
            <input type="number" id="cuaderno" name="cuaderno" min="0" max="10" required>
            </input>
        </td>
    </tr>
    <tr>
        <td>Lápiz</td>
        <td>0.80</td>
        <td>
            <label for="lapiz"></label>
            <input type="number" id="lapiz" name="lapiz" min="0" max="10" required>
            </input>
        </td>
    </tr>
    </table>
    <button type="submit">Enviar</button>
</form>
</body>
</html>
