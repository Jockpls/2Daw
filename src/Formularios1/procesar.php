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
//Definimos variables
    $errores = [];
    $nombre = "";
    $email = "";
    $edad = false;

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $nombre = recibirTexto("nombre"); //recibir texto está recibiendo el valor del formulario
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
<!DOCTYPE html>
<html lang="es">
    <head>
         <meta charset="UTF-8">
         <title>Resultado de la inscripción</title>
    </head>
    <body>
        <?php if (count($errores) > 0): ?>
            <h1>No se ha podido completar la inscripción</h1>
            <ul>
                <?php foreach ($errores as $error): ?>
                    <li><?= escapar($error) ?></li>
                <?php endforeach; ?>
            </ul>
        <?php else: ?>
            <h1>Inscripción recibida</h1>
            <p>Hola, <?= escapar($nombre) ?>.</p>
            <p>Correo: <?= escapar($email) ?></p>
            <p>Edad: <?= $edad ?> años.</p>
                <?php if ($edad < 18): ?>
                    <p>Para este taller necesitarás autorización
                    de tu tutor legal.</p>
                <?php else: ?>
                    <p>Puedes participar sin autorización adicional.</p>
            <?php endif; ?>
        <?php endif; ?>
        <p><a href="formulario.html">Volver al formulario</a></p>
    </body>
</html>
!