<?php
session_start();

$almacen = array(
    "cuaderno" => 2.50,
    "lapiz" => 0.80,
);

function calcularTotal($almacen, $carro): float{
    $total = 0;
    foreach($almacen as $item=>$precio){
        foreach($carro as $objeto=>$cantidad){
            if($objeto == $item && intval($cantidad) > 0){
                $total += intval($cantidad) * $precio;
            }
        }
    }
    return $total;}
if ($_SERVER["REQUEST_METHOD"] == "POST" && intval($_POST["cuaderno"]) && intval($_POST["lapiz"])) {
    $carro = array(
            "cuaderno"=>$_POST["cuaderno"],
            "lapiz"=>$_POST["lapiz"]
    );
    $total = calcularTotal($almacen, $carro);
} else {
    http_response_code(400);
    exit;
}
$options = [
        "expires" => time() + 604800, //Cuando caduca
    //path => solo será accesible a las urls indicadas
    //domain => Dónde es válida la cookie
        "secure" => false,  //solo https
        "httponly"=> true, //permite http y js
];

setcookie("cuaderno", $_POST["cuaderno"], $options);
setcookie("lapiz", $_POST["lapiz"], $options);
setcookie("total", $total, $options);
?>
<?php if ($total > 0): ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrinchi</title>
</head>
<body>
    <h1>La cuenta jefe</h1>
    <h2>Cantidad de accesos hasta el momento: <?= $_SESSION["accesos"] ?></h2>
    <table border="1" cellpadding="10px">
        <thead>
        <th>Objeto</th>
        <th>Precio Final</th>
        </thead>
        <?php foreach($almacen as $item=>$precio): ?>
        <tr>
            <?php foreach($carro as $objeto=>$cantidad): ?>
                <?php if($objeto == $item && intval($cantidad) > 0): ?>
                    <td><?=$item?></td>
                    <td><?=intval($cantidad) * $precio?></td>
            <?php endif; ?>
            <?php endforeach; ?>
        </tr>
        <?php endforeach; ?>
        <tr>
            <td><?= "A pagar: " . $total ?></td>
        </tr>

    </table>
    <br>
    <button><a href="cambiar.php">Cambiar el carrito</a></button>

    <button><a href="vaciar.php">Empezar de nuevo</a></button>

</body>
</html>
 <?php else: ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Carrito vacío</h1>

    <button><a href="cambiar.php">Cambiar el carrito</a></button>
    <button><a href="vaciar.php">Empezar de nuevo</a></button>

</body>
</html>
<?php endif?>