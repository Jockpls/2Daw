//const precios = [12.5, 30, 8, 45.9, 19.99];
//
//console.log("CESTA");
//console.log("PRECIOS: ", precios.join(", "));
//
////find recorrer hasta que encuentra lo que busca
//console.log("Primer número mayor que 20:",precios.find((precio)=> precio > 20));
//
//console.log("Primer número mayor que 90:", precios.find((precio)=> precio > 90) || "No lo hay");
//
//
////findindex
//
//console.log("Primer índice mayor que 20:",precios.findIndex((precio)=> precio > 20));
//
//console.log("Primer índice mayor que 20:",precios.findIndex((precio)=> precio > 90) || "No lo hay");
//
//
////some && every
//
//console.log("Vamos que me lo quitan de las manos", precios.some((precio) => precio === 0));
//
//console.log("Vamos payo ", precios.every((precio) => precio < 50));
//
////Ordenamos el array
//
//precios.sort((a, b) => a - b);
//console.log("Precios ordenados: ", precios.join(", "));

//A partir de const temperaturas = [18, 21, 25, 19, 30, 28, 22];, averiguar si al‐
//gún día se pasó de 30 grados, si todos los días estuvieron por encima de 15, cuál fue el primer
//día que superó los 25 y en qué posición de la semana está, y la lista de temperaturas ordenada
//de mayor a menor.


// const temperaturas = [18, 21, 25, 19, 30, 28, 22];
// 
// //Algun día superó los 30º
// console.log(temperaturas.some((temperatura) => temperatura > 30) || "No lo hay.");
// 
// //Todos los días por encima de 30º
// console.log(temperaturas.every((temperatura) => temperatura > 15));
// 
// //Primer día por encima de 25
// console.log("Es el ", temperaturas.findIndex((precio) => precio > 25) + 1, " día de la semana.");
// 
// //Lista ordenada.
// const temperaturaOrd = temperaturas.sort((a, b) => a - b);
// console.log("Estas son las temperaturas de la semana ordenadas de menor a mayor: ", temperaturaOrd.join(", "));

const clasificacion = ["Marta", "Maria", "Antonio"];

const primero = clasificacion[0];
const segundo = clasificacion[1];

const [oro, plata, bronce] = clasificacion;

console.log("1º - ", oro);

console.log("2º - ", plata);

console.log("3º - ", bronce);

const [Champion, , pringao] = clasificacion;
//

const [uno, dos, tres = "Plaza libre"] = clasificacion;
//3 devuelve plaza libre

const [primera, ...resto] = clasificacion;
//"Marta"; resto ["Maria", "Antonio"] resto se convierte en otro array, evitando hacer el bucle

let local = 2;
let visitante = 3;

[local, visitante] = [visitante, local];

//A partir de const notas = [4, 9, 6, 10, 7];, obtener en tres nombres la nota más alta,
//la segunda y el resto, sin escribir ningún índice entre corchetes.

const notas = [4, 9, 6, 10, 7];

notas.sort((a, b) => b - a);

const [maxima, segunda, ...rest] = notas;

console.log("Más alta ", maxima, "Segunda ", segunda, "El resto:", rest);

const cestaMaria = [12.5, 79, 50];
const cestaAntonio = [8, 12, 36];

const copiaCestaMaria = [...cestaMaria];

copiaCestaMaria.sort((a, b) => a-b);

console.log("Esta es la cesta original", cestaMaria.join(", "));

console.log("Esta es la cesta ordenada", copiaCestaMaria.join(", "));

const copiaCestaAntonio = [...cestaAntonio];


const todasCestas =[...cestaMaria, ...cestaAntonio];
console.log(todasCestas);