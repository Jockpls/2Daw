<?php
    $Num1 = 9;
    $Num2 = 3;

    $Cociente = 0;

    while ($Num1 >= $Num2) { 
            $Num1 -= $Num2; 
            $Cociente++;     
        };
        
    echo "El cociente es $Cociente y resto es $Num1";
?>