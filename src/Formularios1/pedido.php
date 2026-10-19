<?php

    function obtenerPrecioBocadillo(string $tipo): float{
        foreach(price as $tipo => $precio){
            $precioBase = price;
        }
            return $precioBase
        }
    
    function calcularPrecioExtras(array $extras): float{
            $precioExtras = 0;
    foreach($extras as $precio){
            $precioExtras += $precio;
        }
            return $precioExtras
        }

    function calcularTotal(float $precioBase, float $precioExtras, int $cantidad): float{
            $precio = ($precioBase + $extra) * $cantidad;
            return $precio;
    }

    $tipo = array(
        "tortilla" => 3.50,
        "pollo" => 4.50,
        "vegetal" => 4.00,
    )
    $extras = array(
        "queso" => 0.50,
        "tomate" => 0.30,
        "salsa" => 0.20,
    )
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        
    }
?>