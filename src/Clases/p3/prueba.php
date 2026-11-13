<?php
require "Producto.php";

$producto = new Producto("Cuaderno", "C01",250, 10 );

echo "Comienzo con: " . $producto -> getStock();

$producto -> vender(3);
echo "<br><br>Vendo 3 y me quedan: " . $producto -> getStock();

$producto -> reponer(5);
echo '<br><br> Repongo 5 y me quedan: ' . $producto -> getStock();

$producto -> vender(20);
if (!$producto -> vender(20)){
    echo "<br><br>Tas pasao picha";
} else {
    echo "<br><br>ahora sí";
}

$producto -> reponer(-2);
if (!$producto -> reponer(-2)){
    echo "<br><br>Tas pasao picha";
} else {
    echo "<br><br>ahora sí";
}

echo "<br><br>Al final me quedan: " . $producto -> getStock();

echo "<br><br>El valor final del producto es: " . $producto -> calcularValorStock();