<?php
    $RandomNum = random_int(0, 90);
    if($RandomNum >= 0 && $RandomNum <= 3){
        printf("El número %d corresponde a la etapa de Infancia", $RandomNum);
    } elseif($RandomNum <= 11){
        printf("El número %d corresponde a la etapa de Infantil", $RandomNum);
    } elseif($RandomNum <= 20){
        printf("El número %d corresponde a la etapa de Adolescente", $RandomNum);
    } elseif($RandomNum <= 65){
        printf("Illo estás casi viejo con %d ", $RandomNum);
    } else{
        printf("Illo estás viejo con %d", $RandomNum);
    }

?>