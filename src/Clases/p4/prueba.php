<?php
require_once "Producto.php";
require_once "Carrito.php";

$cuaderno = new Producto("Cuaderno", "C01", 250, 10 );
$lapiz = new Producto("Lapiz", "L01", 80, 20 );


$carrito = new Carrito([]);

echo "Añadimos los productos <br>";
print_r($carrito->add($cuaderno, 2));
echo "<br>";
print_r($carrito->add($lapiz, 3));
echo "<br>";
print_r($carrito->add($cuaderno, 1));
echo "<br>";
echo "Se intenta añadir 8 cuadernos más";

echo "<br>";
print_r($carrito->add($cuaderno, 8));
echo "<br>";
echo "<br>";

print_r($carrito->add($lapiz, 0));
echo "<br>";
echo "Se elimina lapiz";
echo "<br>";
print_r($carrito->eliminar('L01'));
print_r($carrito->eliminar('L01'));
print_r($carrito->eliminar('L01'));
print_r($carrito->eliminar('L01'));