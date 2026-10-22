<?php
function comprobarTexto (string $campo): string {
    if (strlen($_POST[$campo]) >= 3 && is_string($_POST[$campo])) {
        return $_POST[$campo];
    } else { return "Valor incorrecto";}
}

function validarEmail (string $campo): string {
    if (filter_var($_POST[$campo], FILTER_VALIDATE_EMAIL)) {
        $valor = trim($_POST[$campo]);
        return $valor;
    } else { return "Email incorrecto";}
}

function validarPlazas (string $campo):int|string {
    if (filter_var($_POST[$campo], FILTER_VALIDATE_INT)) {
        $valor = trim($_POST[$campo]);
        return $valor;
    } else { return "Plazas incorrectas";}
}
function validarTaller (string $campo): string {
    $aceptados = array("php", "web", "seguridad");
    if (!is_string($_POST[$campo]) || empty($_POST[$campo]) || !in_array($_POST[$campo], $aceptados)) {
        return "Taller incorrecto";
    } else {
        $valor = $_POST[$campo];
        return $valor;}
}

function validarObservaciones (string $campo): string {
    if (strlen($_POST[$campo]) > 200) {
        return "El campo no puede superar los 200 caracteres";
    } elseif (strlen($_POST[$campo]) == 0 || empty($_POST[$campo])) {
        return "Sin observaciones";
    } else { return "Observaciones almacenadas"; }
}
function validarAcepto (string $campo): bool {
    if (!$_POST[$campo] == "si") {
        return "Las condiciones son obligatorias";
    } else {
        return true;
    }
}
function calcularTarifa(string $taller, int $plazas): float{
    $tarifas = array("php" => 12, "web" => 10, "seguridad" => 15);
    return $tarifas[$taller] * $plazas;
    }

$nombre ="";
$email ="";
$plazas= 0;
$taller=[];
$observaciones ="";
$acepto = false;


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = comprobarTexto("nombre");
    $email = validarEmail("email");
    $plazas = validarPlazas("plazas");
    $taller = validarTaller("taller");
    $acepto = validarAcepto("acepto");
    $total = calcularTarifa($taller, $plazas);
    } else {
    return "<h1> Metodo incorrecto</h1>";
}

//htmlquotechar
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reserva</title>
</head>
<body>
    <h1>Reserva</h1>
    <p>
    <?= "Nombre: " . $nombre . "; email: " . $email . "; plazas: " . $plazas . "; talleres: " . $taller; ?>
        <?= "Total = " . $total; ?>
    </p>
</body>
</html>
