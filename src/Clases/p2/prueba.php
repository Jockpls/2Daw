<?php
require_once ("Libro.php");

$libro1 = new Libro("Illo", "Cabesa");
$libro2 = new Libro("Aro", "Picha");

echo $libro1 -> prestar();
echo "<br><br>" . $libro1 -> prestar();