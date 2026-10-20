<?php

    function obtenerPrecioBocadillo(string $tipo): float{
        $precios= array(
            "tortilla" => 3.5,    
            "pollo" => 4.5, 
            "vegetal"=> 4.00,    
        );
        foreach(price as $precios => $tipo){
                $precioBase = price;
            };
                return $precioBase;
        }
    
    function calcularPrecioExtras(array $extras): float{
        $precios = array(
            "queso" => 0.50,
            "tomate" => 0.30,
            "salsa" => 0.20,
            );
        $precioExtras = 0;
        foreach($extra as $extras){
            if (in_array($precios, $extra)){
                $precioExtras += $extra;
                } else {
                return -1; //Devuelve un -1 en caso de querer comprobar después
              }
            };
            return $precioExtras;
        }

    function calcularTotal(float $precioBase, float $precioExtras, int $cantidad): float{
            $precio = ($precioBase + $extra) * $cantidad;
            return $precio;
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        
        $nombre = $_POST("nombre");
        $tipo = $_POST("tipo");
        $extras = $_POST("extras[]");
        $cantidad = $_POST("Cantidad")
        
        $bocatas = obtenerPrecioBocadillo($tipo);
        $mejunges = calcularPrecioExtras($extras);
        $pagamiento = calcularTotal($bocatas, $mejunges, $cantidad);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A PAGAR</title>
</head>
<body>
    <h1>A PAGAR<h1>
    <a><?=$nombre . "te toca pagar " . $pagamiento?></a>

</body>
</html>