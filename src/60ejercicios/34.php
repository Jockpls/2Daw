<?php
    $Num1 = 10;
    $Num2 = 2;
    $Contador = 1;
    $Multiplo = $Num2 * $Contador;
    
    while ($Num1 >= $Multiplo){
        echo "$Contador es multiplo. </br>";
        $Contador++;
        $Multiplo = $Num2 * $Contador;
    } 
?>