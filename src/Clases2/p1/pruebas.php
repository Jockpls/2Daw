<?php
require_once 'Envio.php';

$envio1 = new EnvioNormal("Madrid", 2);
echo $envio1->resumen() . PHP_EOL;

$envio2 = new EnvioUrgente("Barcelona", 2, 4);
echo $envio2->resumen() . PHP_EOL;

$envio3 = new EnvioUrgente("Valencia", 0, 5);
echo $envio3->resumen() . PHP_EOL;