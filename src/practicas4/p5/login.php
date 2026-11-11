<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Loginchii</h1>

     <form action="autenticar.php" method="POST">

        <label for="user">Usuario</label>
        <input type="text" id="user" name="user">
         <br><br>
         <label for="passw">Contraseña</label>
        <input type="password" id="passw" name="passw">
         <br><br>

         <label for="recordar">Recordar Usuario</label>
         <input type="checkbox" id="recordar" name="recordar" value="recordar">

         <br><br>
         <input type="submit" value="acceder">
     </form>
</body>
</html>
