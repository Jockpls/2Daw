<?php
    function calcularMedia(array $Notas) : float{
        $suma = 0;
        foreach ($Notas as $i) {
            $suma += $i;
        }
        $media = $suma/count($Notas);

        return $media;
    }
    
    function obtenerCalificacion(float $media): string{
        switch ($media){
            case $media < 5:
                    return sprintf('"%.2f" - Suspenso', $media);
                break;
            case $media < 6:
                    return sprintf('"%.2f" - Aprobado', $media);
                break;
            case $media < 7:
                    return sprintf('"%.2f" - Bien', $media);
                break;
            case $media < 9:
                    return sprintf('"%.2f" - Notable', $media);
                break;
            case $media <= 10:
                    return sprintf('"%.2f" - Sobresaliente', $media);
                break;}
    }


    $Nombre = "";
    $Notas = [];

    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        $Nombre = $_POST["nombre"];
        $Notas = $_POST["notas[]"];
        
        $calificaciones = implode(', ', $Notas);        
        $average = calcularMedia($Notas);
    }
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultadinchi final</title>
</head>
<body>
    <h1>ES EL MOMENTO DE LA VERDAZ</h1>
    <p>Tus calificaciones son:
        <?= $calificaciones ?>
    </p>
</body>
</html>