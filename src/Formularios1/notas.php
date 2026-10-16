<?php
    function comprobarNombre(string $campo): string|null{
        $valor = $_POST[$campo] ?? null;
        return is_string($valor) ? $valor : null;
    }

    function comprobarArray(array $campo): array{
        $contador = 0;
            foreach ($campo as $i) {
                if (is_numeric($i) && ($i >= 0 && $i <= 10)){
                    $contador++;}
                    }
            if ($contador === 3){
                    return $valor = $campo;
            } else {
                echo "<script>
                        alert('Error, campos incorrectos, inténtelo de nuevo.');
                        window.location.href = 'notas.html';
                    </script>";}    
        }
    
    function calcularMedia(array $Notas): float{
        $suma = 0;
        foreach ($Notas as $i) {
            $suma += $i;
        }
        $media = $suma/count($Notas);

        return $media;
    }
    

    function obtenerCalificacion(float $media): string{
        if ($media < 5) {
            return sprintf('%.2f - Suspenso', $media);
        } elseif ($media < 6) {
            return sprintf('%.2f - Aprobado', $media);
        } elseif ($media < 7) {
            return sprintf('%.2f - Bien', $media);
        } elseif ($media < 9) {
            return sprintf('%.2f - Notable', $media);
        } elseif ($media <= 10) {
            return sprintf('%.2f - Sobresaliente', $media);
        } else{
            return sprintf("Valores incorrectos.");
        }
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST"){

        $Nombre = comprobarNombre("nombre");
        $Notas = comprobarArray($_POST["notas"]);
        
        $calificaciones = implode(', ', $Notas);        
        $average = calcularMedia($Notas);
        $evaluado = obtenerCalificacion($average);
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
    <p><?=$Nombre . " estas son tus notas: " . $calificaciones?> </p>

    <p>El resultado de la evaluación es: <?=$evaluado?></p>

</body>
</html>