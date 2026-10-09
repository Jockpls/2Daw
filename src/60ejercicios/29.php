<?php
    $Jose = ["edad", "salario"];
    $Jose["edad"] = random_int(0, 100);
    $Jose["salario"] = random_int(0, 2000);
    
    if ($Jose["edad"] > 16 && $Jose["salario"] > 999):
        echo "A tus {$Jose['edad']} años y ganando {$Jose['salario']} no te libras de hacienda.";
    else:
        echo "Ni te rayes, con {$Jose['edad']} años y ganando {$Jose['salario']} no pagas.";
    endif;

?>