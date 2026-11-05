<?php
$options = [
    "expires" => time() -2592000, //Cuando caduca
    //path => solo será accesible a las urls indicadas
    //domain => Dónde es válida la cookie
    "secure" => false,  //solo https
    "httponly"=> true, //permite http y js
];

setcookie("cuaderno", "", $options);
setcookie("lapiz", "", $options);
setcookie("total", "", $options);

header("location:formulario.php");
?>