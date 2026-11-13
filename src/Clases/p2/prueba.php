<?php
require_once ("Libro.php");

$libro1 = new Libro("", "Cabesa");
$libro2 = new Libro("Aro", "Picha");

$libro1 -> prestar();
echo "<br><br>" . $libro1 -> estaPrestado();

$libro1 -> devolver();
echo "<br><br> " . $libro1 -> estaPrestado();

echo "<br><br> coño" . $libro1 -> obtenerFicha();