<?php
    for ($i=0; $i < 15; $i++) { 
        $num = random_int(1, 100);
        switch ($num) {
            case $num % 2 == 0:
                echo "$num es divisible entre 2 <br>";
                break;
                
            case $num % 3 == 0:
                echo "$num es divisible entre 3 <br>";
                break;

            default:
                echo "$num no es divisible ni entre 2 ni entre 3. <br>";
                break;
        }
    }
?>