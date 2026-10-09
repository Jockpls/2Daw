<?php
    $Nota = random_int(0, 10);
    echo "$Nota </br>";

    switch ($Nota) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            echo "Suspenso champion";
            break;

        case 5:
            echo "Raspaito picha";
            break;

        case 6:
            echo "Mu bien mi rey";
            break;
        
        case 7:
        case 8:
            echo "Un notable, maêtro";
            break;
        
        case 9:
            echo "Un sobresaliente";
            break;
        
        case 10:
            echo "Ta perfe";
            break;
    }
?>