<?php
    $C = 1000000;
    $R = 0.04;
    
    for ($i=0; $i < 20; $i++) { 
            $Interes = ($C * $R)/100;
            $C += $Interes;
            echo sprintf('El interés anual es "%.3f" </br> El capital acumulado es "%s"</br>', $Interes, number_format($C, 3, ',', '.'));
        };
?>