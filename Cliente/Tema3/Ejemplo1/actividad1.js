/* 
Con un selector quedarnos solo con los elementos que pertenecen a libro y a prestado
*/

//Las clases se separan por espacios
//Actua como un subarbol del domsi solo almaceno li y despues quiero acceder a otro elemento dentro 
// tengo que hacerle a esa variable otro querySelector
const librosPrestados = document.querySelectorAll("li.prestado .titulo");


//Primero convertimos nodelist a array
const titulosLibrosPrestados = [...librosPrestados].map(l => l.textContent); 

console.log(titulosLibrosPrestados);

/* Tres formas de acceder a un elemento del dom:
etiqueta html
# = id;
. = clase;
*/

