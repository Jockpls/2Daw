<?php
    function comprobarString(string $nombre): string {
        $valor = $_POST[$nombre] ?? "";
        return is_string($valor) ? $valor : ""; 
    }

    function obtenerPrecioBocadillo(string $tipo): float{
        $precios= array(
            "tortilla" => 3.5,    
            "pollo" => 4.5, 
            "vegetal"=> 4.00,    
        );
        foreach($precios as $price){
                $precioBase = $price;
            };
                return $precioBase;
        }
    
    function comprobarExtras(string $extras): array{
    if (isset($_POST[$extras])){    
        $valor = $_POST[$extras];
        return $valor;
    } else {
        die;
    }
    }

    function calcularPrecioExtras(array $extras): float{
        $precios = array(
            "queso" => 0.50,
            "tomate" => 0.30,
            "salsa" => 0.20,
            );

        $precioExtras = 0;
        foreach($extras as $extra){
                $precioExtras += $precios[$extra];
                };
            return $precioExtras;
            };
    
    function validarCantidad(string $valor){
        if ($_POST[$valor]){
            $cantidad = (int)$_POST[$valor];
            return $cantidad;
        } else {
            die;
        };
    }
    
    function calcularTotal(float $precioBase, float $precioExtras, int $cantidad): float{
            $precio = ($precioBase + $precioExtras) * $cantidad;
            return $precio;
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        
        $nombre = comprobarString("nombre");
        $tipo = comprobarString("tipo");
        $cantidad = validarCantidad("cantidad");
        $extras = comprobarExtras("extras"); //Cómo ya llega un array no hace falta incluir los corchetes
        
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
    <a><?=$nombre . " te toca pagar " . number_format($pagamiento, 2)?></a>

</body>
</html>