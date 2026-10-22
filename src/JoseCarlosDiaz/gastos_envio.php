<?php
//Declaración de variables
$importeCompra = 65.00;
$zona = "peninsula";



//función para calcular envío
function calcularEnvio(string $zona, float $importeCompra): float {
    $territorio = array(
        "peninsula" => 5,
        "islas" => 12,
    );
    if (($zona === "peninsula" && $importeCompra < 60) || ($zona === "islas" && $importeCompra < 100)) { //Comprobamos las condiciones para ver si hay que sumar los gastos de envio
        foreach ($territorio as $zonas) {
            if ($zona == $zonas) {
                return $territorio[$zonas]; //Si se aplican, se devuelven los gastos de envío
                }
            }
        } return 0;
    }

function comprobarImporte(float $importeCompra): float {
    if (!$importeCompra || !is_numeric($importeCompra) || $importeCompra <= 0) {
        return 0;
    } else { return $importeCompra; }
}

function comprobarZona(string $zona): string | bool{
    if ($zona !== "peninsula" && $zona !== "islas") {
        return false;
    } else { return $zona; }
}


    $importe = comprobarImporte($importeCompra);
    $newZona = comprobarZona($zona);
    $gastosEnvio = calcularEnvio($importe, $newZona);

    if ($gastosEnvio != 0 ){ $total = $gastosEnvio + $importe; }
        else { $total = $importe; }

//Si hay gastos de envio envía el total con los gastos, si no solo importe
        ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Gastos de Envío</h1>
<p>
        <?php if ($gastosEnvio): ?>
            <?= 'El total es ' . ${$total} . ' que incluye ' . ${$gastosEnvio} . "€ de gastos de envío" ?>
        <?php else: ?>
            <?= 'El total es ' . ${$total} . ' que no incluye gastos de envío' ?>
        <?php endif ?>

</p>
</body>
</html>
