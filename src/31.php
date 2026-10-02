<?php
    $Num1 = random_int(1, 10);
    $Num2 = random_int(1, 10);

    $Cociente = 0;
    
    if ($Num1 - $Num2 > 0){
        for ($i=0; $i < $Num1; $i++) { 
            $Cociente++;
        };
        echo "El cociente de $Num1 y $Num2 es $Cociente";
    } elseif ($Num2 - $Num1 > 0){
        for ($i=0; $i < $Num2; $i++) { 
            $Cociente++;

        };
        echo "Cociente = $Cociente";
    } else {
        echo "Cociente = 1 y el resto 0";
    } 

?>