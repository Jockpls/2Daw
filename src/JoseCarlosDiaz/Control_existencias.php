<?php
$productos = [
    ["nombre" => "Teclado", "precio" => 25.00, "stock" => 4],
    ["nombre" => "Ratón", "precio" => 15.50, "stock" => 0],
    ["nombre" => "Monitor", "precio" => 120.00, "stock" => 2],
    ["nombre" => "Cable USB", "precio" => 6.00, "stock" => 8]
];
function calcularValor(array $productos): int{
    $acumulador = 0;
    foreach ($productos as $producto) {
        $acumulador += $producto['precio'] * $producto['stock'];
    } return $acumulador;

}
function estadoStock(int $stock): string {
        if ($stock == 0) {return "Agotado";}
        elseif ($stock < 3) {return "Stock bajo";}
        else { return "Disponible";}
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
    <p><strong>Calcular el valor de las existencias de la tabla</strong></p>
    <?php foreach ($productos as $producto):?>
        <tr>
                <td><?=$producto["nombre"]?></td>
                <td><?=$producto["precio"]?></td>
                <td><?=$producto["stock"]?></td>

        <tr>
    <?php endforeach;?>
</html>
