<?php
require_once 'Registro.php';

$r1 = Registro::crear();
$r1->tema = "microbiota";
$r1->idioma = "Español";

$r2 = Registro::crear();
$r2->tema = "  Gondolas    ";
$r2->idioma = "    ";



echo "El tema es " . $r1->tema;
echo "<br>";
echo "El idioma es " . $r1->idioma;
echo "<br>";
echo "Invocar idioma (__invoke): " . $r1('idioma') . "<br>";
echo "A Json" . $r1->__toString();
echo "<br>";
echo "Volcado (__debugInfo): <br>";
var_dump($r1);

