const libro = {
    titulo : "La Sombra del viento",
    autor : "Ruiz Zafon",
    anno: 2001,
    disponible: true,

    resumen : () => `${libro.titulo} + ${libro.autor}`, 

};


console.log("LIBRO");

console.log("Título", libro.titulo);

console.log("Autor", libro.autor);

const campo_anno = "anno";
console.log("El campo es ", campo_anno, ": ", libro["anno"]);

console.log("Editorial: ", libro.editorial);

libro.editorial = "Planeta";
libro.disponible = false;
delete libro.anno;

console.log("La editorial es: ", libro.editorial);

console.log("Año???", libro.anno);

console.log(libro.disponible);

console.log(libro.resumen());



const catalogo = [
    {titulo:"Illo", autor:"No veas", disponible: true},
    {titulo:"Aro", autor:"Cabesa", disponible: false },
    {titulo:"Mayonesa", autor:"Hellmans", disponible: true},
]


const {autor, titulo, editorial = "sin editorial"} = catalogo[0];

console.log("Primera Ficha.");

console.log(titulo, " - ", autor, " - ", editorial);

const nombresCampos = Object.keys(catalogo[0]);
const valoresCampos = Object.values(catalogo[0]);

console.log("Nombres claves", nombresCampos);

console.log("Valores campos", valoresCampos);


const disponibles = catalogo.filter((libro_catalogo)=> libro_catalogo.disponible);
console.log("Libros disponibles: ", disponibles.length, "de" , catalogo.length);


