<?php
    $Contador = 0;
    $ContImp = 0;
    while (($Contador > 10000 && $Contador < 11000) === False) {
        $Num = random_int(1, 40);
        if ($Num % 2 != 0){$ContImp++;};
        $Contador += $Num**2;
    }
        echo "Esta es la suma $Contador <br>";
        echo "Estos son los impares que hay $ContImp"
?>