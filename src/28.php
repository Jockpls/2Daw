<?php
    $X = random_int(1, 10);
    $Y = random_int(1, 10);
    echo "$X es el numero y $Y la potencia. </br>";
    
    for ($i=0; $i < $Y; $i++): 
        $X *= $X;
        echo "$X </br>";
    endfor;    
    echo "El resultado es $X";
?>