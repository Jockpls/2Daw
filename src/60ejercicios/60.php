<?php
    $Num1 = 1210;
    $Num2 = 1189;
    
    echo "Numero 1 es $Num1 </br>";
    echo "Numero 2 es $Num2 </br>";

    $cont1 = 0;
    for ($i = 1; $i < $Num1; $i++){
        if ($Num1 % $i === 0){
            $cont1 += $i;
        }
    }

    $cont2 = 0;
    for ($j = 1; $j < $Num2; $j++){
        if ($Num2 % $j === 0){
            $cont2 += $j;
            echo "$j </br>";
        }
        echo "$cont2 </br>";
    }

    if($cont1 === $Num2 && $cont2 === $Num1){
        echo "Son superamiguis de la muerte";
    } else{
        echo "Que espabilen, coño ya";
    }

?>