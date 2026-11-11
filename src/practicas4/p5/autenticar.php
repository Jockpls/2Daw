<?php
session_start([
    'cookie_lifetime' => 0,
    'use_cookies' => 1,
    'use_only_cookies' => 1,
    'use_strict_mode' => 1,
    'cookie_httponly' => 1,
]);


if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    die("Error: metodo de acceso incorecto");
    } else {
    $usuario = $_POST['user'];
    $passw = $_POST['passw'];

    if(isset($_POST['recordar'])){
        setcookie("ultimo_usuario", $usuario, time() + (86400 * 7), "/");
    }

    $autenticar = fopen("../usuarios.json", "r");
    $usuarios = fread($autenticar, filesize("../usuarios.json"));
    fclose($autenticar);

    $usuarios = json_decode($usuarios, true);

    if (isset($usuarios[$usuario])) {
        if (password_verify($passw, $usuarios[$usuario])) {

            session_regenerate_id(true); //Si el usuario es válido, regeneramos el id destruyendo el antiguo

            $_SESSION['usuario'] = $usuario;
            $_SESSION['ultimo_acceso'] = time();
            header('Location: privada.php');
        } else {
            exit("Error: credenciales incorrectas");
        }
    } else{
        exit("Error: usuario incorrecto");
    }
}