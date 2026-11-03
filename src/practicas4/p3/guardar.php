<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tema = $_POST["tema"];
    $idioma = $_POST["idioma"];

    $options = [
        "expires" => time() + 604800, //Cuando caduca
        //path => solo será accesible a las urls indicadas
        //domain => Dónde es válida la cookie
        "secure" => false,  //solo https
        "httponly"=> true, //permite http y js
    ];

    //Usando este metodo hay que introducir todos los valores, si lo haces con el array options le das los valores que quieras
    setcookie("tema", $tema, time() + 604800, "/", "", false, true);
    //Desde options solo tienes que especificar las que te interesen
    setcookie("idioma", $idioma, $options);
}

header("Location: ver.php");
?>