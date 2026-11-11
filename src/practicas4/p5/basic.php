<?php
if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW'])) {
    header('WWW-Authenticate: Basic realm="Acceso restringido"');
    header('http/1.0 401 Unauthorized');
    exit("Error: login incorrecto");

}
$users = fopen("../usuarios.json", "r");
    $json_datos = fread($users, filesize("../usuarios.json"));
fclose($users);
$usuarios = json_decode($json_datos, true);

$user_introducido = $_SERVER['PHP_AUTH_USER'];
//$passw_introducido = password_hash( "Aula-2026!",PASSWORD_DEFAULT); //Esto falla porque compara dos hashes recién generados
$passw_introducido = $_SERVER['PHP_AUTH_PW'];

if (isset($usuarios[$user_introducido])){
    $hash = $usuarios[$user_introducido];
    if (password_verify($passw_introducido, $hash)){
        echo "Exito";
    } else {
        die('Error: clave incorrecta');
    }
} else {
    die('Error: el usuario no existe');
}
