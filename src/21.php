<?php
    $Edad = random_int(0, 99);
    if ($Edad > 17) {
        echo "El usuario a sus $Edad años es mayor de edad.";
    } else {
        echo "El usuario a sus $Edad años es menor de edad.";
    }
?>