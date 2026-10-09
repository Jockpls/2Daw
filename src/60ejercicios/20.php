<?php
    $NumRan = random_int(1, 20);
    if ($NumRan % 2 === 0) {
        echo "$NumRan es un número par";
    } else {
        echo "$NumRan es un número impar";
    }

?>