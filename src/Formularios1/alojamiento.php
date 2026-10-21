<?php
function obtenerTarifa(string $habitacion): float{
    $precios = array(
        "individual" => 45,
        "doble" => 70,
        "suit" => 110,
            );
        $tarifa = $precios[$habitacion];
        return $tarifa;
    }
function calcularAlojamiento(float $tarifa, int $noches): float{
        return $tarifa * $noches;
        }
function calcularDescuento(float $alojamiento, int $noches): float{
        return $noches >= 7 ? $alojamiento * 0.1 : 0;
    }
function calcularDesayuno(bool $desayuno, int $noches): float{
    return $desayuno ? 8.00 * $noches : 0;
    }

function validarCampo(string $campo, array &$errores): string{
        $valor = $_POST[$campo];
        if (!is_string($valor)){
            $errores[] = "Formato incorrecto en $campo";
            return "";
        }
        return trim($valor);
    }

$desayuno = false;
$errores = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = validarCampo("nombre", $errores);
    $habitacion = validarCampo("habitacion", $errores);
    $nochesTexto = validarCampo("noches", $errores);

    if ($nombre === "") {$errores[] = "El nombre es obligatorio";}
    if (!in_array($habitacion, ["individual", "doble", "suit"], true)){
        $errores[] = "Habitación incorrecta";
    }
    $noches = filter_var($nochesTexto, FILTER_VALIDATE_INT,
            ['options' => ['min_range' => 1, 'max_range' => 30]]);
    if($noches === false){
        $errores[] = "Cantidad de noches incorrecta";
    }
    if (array_key_exists("desayuno", $_POST)){
        if($_POST["desayuno"] !== "si"){
            $errores[] = "Desayuno incorrecto";
        } else {$desayuno = true;};
    }
    if (!$errores) {
        $tarifa = obtenerTarifa($habitacion);
        $precioAlojamiento = calcularAlojamiento($tarifa, $noches);
        $discount = calcularDescuento($precioAlojamiento, $noches);
        $breakfast = calcularDesayuno($desayuno, $noches);
        $total = $precioAlojamiento - $discount + $breakfast;
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alojamientinchi</title>
</head>
<body>
    <h1>Alojamientinchi</h1>
    <?php if($errores): ?>
        <ul><?php foreach($errores as $error): ?>
            <li><?= $error ?> </li>
        <?php endforeach; ?></ul>
    <?php endif; ?>

    <?php if(!$errores): ?>
    <p>
        <?= $nombre . "Tarifa " . $tarifa . "Alojamiento " . $precioAlojamiento . "descuento " . $discount . "desayuno " . $breakfast . "total " . $total ?>
    </p>
    <?php endif; ?>
</body>
</html>

