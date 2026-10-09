<?php
    $Dic = array();
    
    do{
        $Num = random_int(1, 100);
        $Raiz = sqrt($Num);

        $Dic[$Num] = round($Raiz, 2);
        } while (floor($Raiz) != $Raiz);
    
    echo "La raíz cuadrada de $Num es $Raiz. <br>";

    foreach ($Dic as $numero => $valor) {
        echo "$numero, $valor <br>";
    }
?>