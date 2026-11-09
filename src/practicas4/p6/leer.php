<?php
$archivo = file("../bitacora.txt"); //con file lo convertimos en un array
foreach ($archivo as $linea) {
    echo "<ul><li>" . htmlspecialchars($linea) . "</li></ul>";
}

echo

$puntero = fopen("../bitacora.txt", "r"); //abrimos el fichero para poder leerlo por bites
if (!$puntero) {
    echo "No es posible abrir el archivo";
} else {
    while (!feof($puntero)) {
        $baits = fread($puntero, 16); //con fread leemos el archivo de 16 en 16 bytes
        echo "__/$baits/__"; //Lo imprimimos con separadores para ver cual es cada tramo

    }
    rewind($puntero); //llevamos el puntero al principio
    $contador = 0;
    while (!feof($puntero)) {
        fgetc($puntero);
        $contador++;
    }
    echo "<br>El tamaño del archivo es " . $contador - 1 . "bytes"; //Hay que restar uno porque feof cuando llega al final vuelve a intentar leer de nuevo y suma una vuelta de más
    fclose($puntero);
}
?>