<?php
//Aquí hay que borrar las cookies y redirigir al formulario
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $options = [
        "expires" => time() -2592000, //Cuando caduca
        //path => solo será accesible a las urls indicadas
        //domain => Dónde es válida la cookie
        "secure" => false,  //solo https
        "httponly"=> true, //permite http y js
    ];

    setcookie("tema", "", time() - 2592000, "/", "", false, true);
    setcookie("idioma", "", $options);
    header("Location: formulario.html");
    exit();
    }
?>