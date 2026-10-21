<?php
function obtenerTarifa(string $habitacion): float{
    $precios = array(
        "individual" => 45,
        "doble" => 70,
        "suit" => 110,
    );
    foreach ($precios as $precio) {
        if ($habitacion == $precio) {
            $tarifa = $precio;
            };
        }; return $tarifa;
    }
function calcularAlojamiento(float $tarifa, int $noches): float{

}
function calcularDescuento(float $alojamiento, int $noches): float{
    $descuento = 8;
}
function calcularDesayuno(bool $incluido, $noches): float{}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $alojamiento = $_POST["habitacion"];
    $noches = $_POST["noches"];
    $incluido = $_POST["desayuno"];

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

</body>
</html>