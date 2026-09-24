<?php
$Sun = 150000000;
$Pluto = 5.9064*(10**9);
$Diametro = 1392000;
echo "Distancia del sol {$Sun} km.</br>";
echo sprintf('Distancia del sol a plutón "%.2e" km. </br>', $Pluto);
echo "Diametro {$Diametro} km.";
?>