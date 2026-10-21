<?php
function validarNombre (string $campo, array &$errores): string{
    $valor = $_POST[$campo] ?? "";
    if (!is_string($valor)) {
        $errores[]= "Nombre no válido";
        return "";
    }
    return trim($valor);
}
function calcularMedia(array $Notas): float{
    $contador = 0.0;
    foreach ($Notas as $n) {
        $contador += $n;
        }
    return $contador/count($Notas);
}

function obtenerCalificacion(float $media): string{
    if ($media < 5) {return 'suspenso';}
    if ($media < 6) {return 'aprobado';}
    if ($media < 7) {return 'bien';}
    if ($media < 9) {return 'notable';}
    return 'sobresaliente';
    }


$errores = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = validarNombre("nombre", $errores);
    $recibidas = $_POST["notas"] ?? [];
    $notas = [];

    if (!is_array($recibidas) || count($recibidas) !== 3) {
        $errores[] = "Notas insuficientes";
        } else {
            foreach ($recibidas as $r) {
                if (!is_numeric($r) || !is_string($r)) {
                    $errores[] = "Las notas tienen que ser números";
                } else {
                    $valor = (float)$r;
                     if (is_infinite($valor) || $valor < 0 || $valor > 10 ) {
                         $errores[] = "La nota debe estar entre 0 y 10";
                     } else{ $notas[] = $valor;}
                    }
                }
            }

    if (!$errores) {
        $media = calcularMedia($notas);
        $calificacion = obtenerCalificacion($media);
        $resultado = ["Alumno: $nombre",
            'media: '. number_format($media, 2 ,',','.'),
            "calificacion: $calificacion"];
    }
}
?>

<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Notazas</title>
</head>
<body>
    <?php if ($errores): ?>
        <h1>Revisa los datos</h1>
        <ul><?php foreach ($errores as $error): ?>
            <li><?= $error ?></li>
        <?php endforeach; ?> </ul>
    <?php else: ?>
        <h1>Resultadinchi</h1>
    <ul><?php foreach ($resultado as $r): ?>
        <li><?= $r ?></li>
    <?php endforeach; ?></ul>
    <?php endif; ?>
    <p><a href="notas.html">Volver al formulario</a></p>
</body>
</html>
