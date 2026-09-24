<?php
    $Adults = 40;
    $Kids = 6;
    $Lb = 0.4535923699993531;
    
    $TotalWeight = ($Adults * 75 + $Kids * 20) * $Lb;
    $RestWeight = $TotalWeight - 1000;
    if($RestWeight > 0){
        echo "Sobran " . number_format($RestWeight, 2) . "kg, hay que dar otro viaje</br>";
        printf("Sobran %.2f kg, hay que dar otro viaje", $RestWeight);
    } else {
        echo "¡Todos a bordo!";
    }

?>
