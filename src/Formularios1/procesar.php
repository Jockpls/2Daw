<?php
// Recupera texto y elimina espacios de los extremos.
    function recibirTexto(string $campo): string {
        $valor = $_POST[$campo] ?? "";
        return is_string($valor) ? trim($valor) : "";
    }
// Prepara texto para mostrarlo de forma segura en HTML.
    function escapar(string $texto): string {
        return htmlspecialchars($texto, ENT_QUOTES, "UTF-8");
    }
    
    $errores = [];
    $nombre = "";
    $email = "";
    $edad = false;
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $nombre = recibirTexto("nombre");
        $email = recibirTexto("email");
        $edadTexto = recibirTexto("edad");
        if ($nombre === "") {
            $errores[] = "El nombre es obligatorio.";
        }
        if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            $errores[] = "El correo electrónico no es válido.";
        }
        $edad = filter_var (
            $edadTexto,
            FILTER_VALIDATE_INT,
            ["options" => ["min_range" => 16, "max_range" => 120]]
        );
        if ($edad === false) {
            $errores[] = "La edad debe ser un entero entre 16 y 120.";
        }
    } else {
        $errores[] = "Debes acceder enviando el formulario.";
    }
?>