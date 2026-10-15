<?php
    /*
    Función para comprobar que lo que recibimos es un entero.
    recibimos un texto, que comprobamos que acepta o devuelve esos tipos de datos (en los pipes)
    Definimos valor, comprobamos que del post recibimos un campo o si no, nulo
    lo devolvemos, forzando a php a que haga la conversión a numérico
    o por el contrario devuelve nulo
    */
    function comprobarNumero(string $campo): int|float|null { 
        $valor = $_POST[$campo] ?? null;
        return is_numeric($valor) ? $valor + 0 : null;
    }
    
    $num1 = "";
    $num2 = "";
    $ope = "";
    
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $num1 = comprobarNumero("num1");
        $num2 = comprobarNumero("num2");
        $ope = $_POST["ope"];
        if ($num1 != null && $num2 != null){
            switch ($ope){
                    case "Sum":
                        $num3 = $num1 + $num2;
                        break;

                    case "Rest":
                        $num3 = $num1 - $num2;
                        break;

                    case "Mult":
                        $num3 = $num1 * $num2;
                        break;

                    case "Divd":
                        if ($num2 == 0){
                            $Divby0 = "No se puede dividir entre 0.";
                            $num3 = NULL;
                            break;
                        } else
                        {$num3 = $num1 / $num2;
                        break;
                        };
                }           //alert para lanzar una alerta en el navegador con un mensaje concreto.
        } else {echo "<script>
                        alert('Valores no validos');
                        window.location.href = 'calculadora.html';    
                    </script>";} 
                        //window.location.href para volver a la página inicial.
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RESULTADEITOR</title>
</head>
<body>
    <h1>RESULTADEITORRR</h1>
    <p><?= $num3 == true ? "El resultado de la operación es $num3" : $Divby0; ?></p>
</body>
</html>