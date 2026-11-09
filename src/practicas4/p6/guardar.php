<?php
    function comprobarTexto($campo):string{
        if(!isset($_POST[$campo]) || is_array($_POST[$campo])) {
            die("Error: No se permiten arrays");
        }

        $valor = trim($_POST[$campo]);

        if ($valor !== "" &&
            mb_strlen($valor) <= 120 &&
            mb_strlen($valor) > 0 &&
            mb_check_encoding($valor, "UTF-8") !== false &&
            !preg_match('/[[:cntrl:]]/u', $valor)) {
            return $valor;} else {
            die("Error: no se cumplen los requisitos");
        }
    }

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $texto = comprobarTexto('texto');

    $puntero = fopen("../bitacora.txt", "a+");
    fwrite($puntero, $texto . "\n");
    fclose($puntero);

    header('Location: leer.php');
}
?>