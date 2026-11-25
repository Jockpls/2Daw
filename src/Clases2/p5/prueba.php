<?php
require_once 'Registro.php';

try {
    $r1 = new Registro("Microbiota", "Español");
    $r2 = new Registro("Microbiota", "       ");
    $r2 = new Registro("Microbiota", "");
} catch (Exception $e){
    echo $e->getMessage() . "\n";
}finally{
    print_r($r1);
}