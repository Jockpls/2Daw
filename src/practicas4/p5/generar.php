<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $usuario = $_POST['usuario'];
    $clave = $_POST['passw'];

    $contrasena = password_hash($clave, PASSWORD_DEFAULT);

    $user = array("usuario" => $usuario, "passw" => $contrasena);

    $user_final = json_encode($user);

    $registro = fopen("../usuarios.json", "a");
    fwrite($registro, $user_final . PHP_EOL);
    fclose($registro);

}