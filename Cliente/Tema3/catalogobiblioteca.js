//ALmaceno. los elementos de mi DOM
const resumen = document.querySelector("#resumen");
const catalogo = document.querySelector("#catalogo");

//Modificamos una propieradad o característica del elemento
console.log("Cambiamos el textContent");
console.log("El original:", resumen.textContent);
console.log("Cambiando...");
resumen.textContent = "nuevo"
console.log("El nuevo:", resumen.textContent);

//El textContent no interpreta etiquietas, pone el texto tal cual
resumen.textContent= "<b>texto negrita</b>";


//Creamos un elemento nuevo en el DOM
const nuevoLista = document.createElement("li");
nuevoLista.textContent = "Rayuela";
console.log("He creado el li, pero no lo he añadido:", catalogo.children.length);
catalogo.append(nuevoLista);
console.log("He creado el li, y lo he añadido:", catalogo.children.length);


//Eliminar elementos
console.log("Vamos a eliminar un elemento");
nuevoLista.remove();
console.log("Tras quitar el hijo, cuántos tiene catálogo?",catalogo.children.length);

const libros = [
    {titulo: "El quijote", autor:"Miguel", disponible:false},
    {titulo: "Rayuela", autor:"Uno", disponible:true},
    {titulo: "Pedro", autor:"Juan", disponible:false},
];

for (const libro of libros) {
    const item = document.createElement("li");
    item.textContent = `${libro.titulo} - ${libro.autor}`;
    catalogo.append(item);
}

console.log("Cuantos hijos tiene catalogo??", catalogo.children.length)