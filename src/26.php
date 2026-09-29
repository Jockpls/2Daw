<?php
    $Num1 = random_int(0, 20);
    $Num2 = random_int(0, 20);
    $Num3 = random_int(0, 20);
    
    echo "EL primer numero es $Num1, el segundo $Num2 y el tercero $Num3</br>";

    if ($Num1 <= $Num2 and $Num2 <= $Num3){
        echo "$Num1 es menor o igual que $Num2 que es menor o igual que $Num3";
    }  elseif ($Num2 <= $Num1 and $Num1 <= $Num3) {
        echo "$Num2 es menor o igual que $Num1 que es menor o igual que $Num3";
    } elseif ($Num3 <= $Num2 and $Num2 <= $Num1) {
        echo "$Num2 es menor o igual que $Num1 que es menor o igual que $Num3";
    } elseif($Num3 <= $Num1 and $Num1 <= $Num2){
        echo "$Num3 es menor o igual que $Num1 que es menor o igual que $Num2";
    } elseif($Num1 <= $Num3 and $Num3 <= $Num2){
        echo "$Num1 es menor o igual que $Num3 que es menor o igual que $Num2";
    }
?>