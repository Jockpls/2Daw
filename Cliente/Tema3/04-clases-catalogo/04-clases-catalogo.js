//Quedarnos con los libros del HTML

const libros = [...document.querySelectorAll(".libro")];

//Añadir una clase a los elementos

libros[0].classList.add("destacado")

//Puedes preguntarle a un elemento si tiene o no una clase
console.log("Destacado? ", libros[0].classList.contains("destacado"))

//Mostrar las clases de un elemento
console.log(libros[0].classList);

//Quitar y alternar un estilo
console.log("Vamos a quitar una clase");
libros[0].classList.remove("destacado");

//Con toggle alternamos entre .add y .remove en una clase del dom
console.log("toggle: ", libros[0].classList.toggle("destacado"))
console.log("toggle: ", libros[0].classList.toggle("destacado"))

