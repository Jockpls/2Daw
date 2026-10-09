<?php
    $R =  random_int(0, 255);
    $G =  random_int(0, 255);
    $B =  random_int(0, 255);
?>

<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Colorinchis</title>
    </head>
    <body style= "background-color:rgb(<?php echo $R ?>, <?php echo $G ?>, <?php echo $B ?>);">
        <p>El color de fondo es aleatorio.</p>
    </body>
</html> 