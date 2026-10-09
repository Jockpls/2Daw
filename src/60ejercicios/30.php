<?php
    $Num1 = random_int(1, 10);
    $Num2 = random_int(1, 10);
    $Producto = 0;

    //if ($Num1 > $Num2){
    //    for ($i=0; $i < $Num1; $i++) { 
    //        $Producto += $Num2;
    //    };
    //    echo "$Num1 * $Num2 = $Producto";
    //} elseif ($Num2 > $Num1){
    //    for ($i=0; $i < $Num2; $i++) { 
    //        $Producto += $Num1;
    //    };
    //    echo "$Num2 * $Num1 = $Producto";
    //} else {
    //    for ($i=0; $i < $Num1; $i++) { 
    //        $Producto += $Num2;
    //    };
    //    echo "$Num1 * $Num2 = $Producto";
    //}

    switch ($Num1) {
        case $Num1 > $Num2:
            for ($i=0; $i < $Num1; $i++) { 
            $Producto += $Num2;
            };
            echo "$Num1 * $Num2 = $Producto";
            break;
        
        case $Num1 < $Num2:
            for ($i=0; $i < $Num2; $i++) { 
            $Producto += $Num1;
            };
            echo "$Num2 * $Num1 = $Producto";
            break;
        
        default:
            for ($i=0; $i < $Num1; $i++) { 
                $Producto += $Num2;
                };
            echo "$Num1 * $Num2 = $Producto";
            break;
        }

?>



