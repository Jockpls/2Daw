<?php
    $Nombre = "Jose Carlos";
    $Contador = 0;
    for ($i = 0; $i < strlen($Nombre); $i++) {
        $Contador +=1;
    }
    printf ("El nombre $Nombre tiene $Contador caracteres");
?>