<?php
$accesos =  0;
session_start();
$_SESSION["accesos"] = $accesos + 1;
$almacen = array(
    "cuaderno" => 2.50,
    "lapiz" => 0.80,
);


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $cuadernos = $_POST["cuaderno"];
    $lapiz = $_POST["lapiz"];


}

;

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrinchi</title>
</head>
<body>
    <h1>La cuenta jefe</h1>
    <h2>Cantidad de accesos hasta el momento: <?=$accesos ?></h2>
    <table border="1" cellpadding="10px">
        <thead>
        <th>Objeto</th>
        <th>Precio</th>
        </thead>
        <?php foreach($almacen as $item=>$precio): ?>
        <tr>
            <td><?= $item ?></td>
            <td><?= $precio * 100 . " céntimos"?></td>
        </tr>
        <?php endforeach; ?>
        <tr>
            <td><?= $total ?></td>
        </tr>
    </table>

</body>
</html>
