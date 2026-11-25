<?php
require_once "modelo.php";
$a = new Ficha("Ana", "Córdoba");
$b = $a;
$c = clone($a);

echo "imprimimos a";
echo "<br>";
print_r($a ->__toString());
echo "<br>";
echo "imprimimos b";
echo "<br>";
print_r($b ->__toString());
echo "<br>";
echo "imprimimos c";
echo "<br>";
print_r($c ->__toString());
echo "<br>";
echo "<br>";
echo "\----------------------/";
echo "<br>";
if ($a === $b){
    echo "a es igual a b";
}
echo "<br>";
echo "<br>";
if ($a === $c){
    echo "a es igual a c";
} else {
    echo "a es distinto de c";
}
echo "<br>";
echo "<br>";
if ($b === $c){
    echo "b es igual c";
} else {
    echo "b es distinto de c";
}
echo "<br>";
echo "<br>";
if ($a == $b){
    echo "a es casi igual a b";
}
echo "<br>";
echo "<br>";
if ($a == $c){
    echo "a es casi igual a c";
} else {
    echo "a es distinto de c";
}
echo "<br>";
echo "<br>";
if ($b == $c){
    echo "b es casi igual c";
} else {
    echo "b es distinto de c";
}
echo "<br>";
echo "<br>";
echo "\----------------------/";
echo "<br>";
function mudar(Ficha $ficha, string $ciudad): void{
    $ficha -> ciudad = $ciudad;
}

mudar($b, "Málaga");

echo "Mostrando a: ";
echo "<br>";
echo $a;
echo "<br>";
echo "Mostrando b: ";
echo "<br>";
echo $b;
echo "<br>";
echo "Mostrando c: ";
echo "<br>";
echo $c;
echo "<br>";
echo "\----------------------/";
echo "<br>";
function copiaEn(Ficha $ficha, string $ciudad): Ficha{
    $fichaNueva = clone($ficha);
    $fichaNueva -> ciudad = $ciudad;
    return $fichaNueva;
}

$d = copiaEn($a, "Granada");
echo "<br>";
echo "Mostrando d: ";
echo "<br>";
echo $d;
echo "<br>";
echo "<br>";
echo 'Con foreach recorremos a: <br>';
foreach($a as $value => $key){
    echo $key;
    echo '<br>';
}
echo "<br>";
echo "<br>";
echo 'Con foreach recorremos c: <br>';
foreach($c as $value => $key){
    echo $key;
    echo '<br>';
}


echo "<br>";
echo "\----------------------/";
echo "<br>";

$t1 = new Testigo("Paco");
$t2 = new Testigo("Jose Carlos");
$t3 = $t1;
echo "<br>";

$t1 = null;

echo "<br>";
print_r($t2->__toString() . " sigue en pie");
echo "<br>";
echo "<br>";
echo "Se muestra t3 para ver si sigue en pie";
echo "<br>";
echo $t3->__toString();
echo "<br>";
$t1 = null;
$t3 = null;
echo "<br>";
echo "Al finalizar el script se borra el testigo, aunque con null se borra el objeto, al seguir referenciado más alante, no se destruye, porque sigue compartiendo memoria con t3";

echo 'Fin';