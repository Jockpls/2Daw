<?php
require_once ("Rectangulo.php");

$a = new Rectangulo(5,3);
$b = new Rectangulo(2,4);

echo "El area de a antes del cambio: " . $a->calcularArea() . "<br>";
echo "La altura de a antes del cambio: " . $a->calcularPerimetro() . "<br>";

$a -> cambiarMedidas(6, 2);
echo "<br>Cambio la base de a: " . $a -> getBase() . "<br>";
echo "Cambio la altura de a: " . $a -> getAltura() . "<br>";


if ($a -> cambiarMedidas(0, 8)){
    echo "<br>La base de a es: " . $a -> getBase() . "<br>";
    echo "La altura de a es: " . $a -> getAltura() . "<br>";
} else {
    echo "<br>No se ha podido modificar las propiedades<br>";
}



echo "<br>La base de b es: " . $b -> getBase() . "<br>";
echo "La altura de b es: " . $b -> getAltura() . "<br>";

echo "<br>---Perimetros---<br>";

echo "El perimetro de a es: " . $a-> calcularPerimetro() . "<br>";
echo "El perimetro de b es: " . $b -> calcularPerimetro() . "<br>";

echo "<br>---Areas---<br>";

echo "El area de a es: " . $a-> calcularArea() . "<br>";
echo "El area de a b es: " . $b -> calcularArea() . "<br>";

/*
A no modifica a b porque son objetos distintos, si hubieramos declarado b con un paso por referencia ($b = $a) sí se modificaría.
$this lo usamos para invocar a una propiedad del objeto.
  */