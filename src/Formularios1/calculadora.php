<?php
    $num1 = "";
    $num2 = "";
    $ope = "";
    
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $num1 = $_POST["num1"];
    $num2 = $_POST["num2"];
    $ope = $_POST["ope"];

    switch ($ope){
            case "Sum":
                $num3 = $num1 + $num2;
                break;

            case "Rest":
                $num3 = $num1 - $num2;
                break;

            case "Mult":
                $num3 = $num1 * $num2;
                break;

            case "Divd":
                $num3 = $num1 / $num2;
                break;
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RESULTADEITOR</title>
</head>
<body>
    <h1>RESULTADEITORRR</h1>
    <p>El resultado de la operación es <?=$num3?></p>
</body>
</html>