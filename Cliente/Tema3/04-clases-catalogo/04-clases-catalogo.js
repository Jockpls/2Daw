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

//Puedo acceder a un elemento por la clase que mi JS ha añadido
libros[1].classList.add("prestado");
libros[3].classList.add("prestado");

console.log("Libros prestados: ", document.querySelectorAll(".libro.prestado").length)

//Podemos trabajar con varias clases a la vez
libros[2].classList.add("prestado","destacado")


//Cambiar el aspecto a todo el documento
document.body.classList.add("oscuro")
document.body.classList.remove("oscuro")
document.body.classList.toggle("oscuro")

//Podemos, pero hay que evitarlo, cambiar el HTML con style
libros[2].querySelector(".titulo").classList.add("destacado")
libros[2].querySelector(".titulo").style.color ="crimson";

