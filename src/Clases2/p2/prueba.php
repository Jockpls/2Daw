<?php
require_once 'modelo.php';

$mensaje = "Se acaban las matriculas Bort";
$mensaje2 = "SE HAN ACABADO LAS MATRÍCULAS BORT";

$cm = new CanalMemoria();
echo $cm->enviar($mensaje);
echo '<br>';
echo '<br>';

print_r($cm->historial());
echo '<br>';
echo '<br>';

echo $cm->enviar($mensaje2);
echo '<br>';
echo '<br>';


print_r($cm->historial());
echo '<br>';
echo '<br>';
echo "Se reinicia todo....";
$cm->reiniciar();
echo '<br>';
echo '<br>';

print_r($cm->historial());
echo '<br>';
echo '<br>';

$cp = new CanalPantalla();
echo $cp->enviar($mensaje);
echo '<br>';
echo '<br>';
echo "A ver servicio de avisos...";
echo '<br>';
echo '<br>';

$sp = new ServicioAvisos($cp);
print_r($sp->avisar($mensaje));

