const tema = document.querySelector("#tema");
const visitas = document.querySelector("#visitas");
const libros = [...document.querySelectorAll(".libro")];

//Vamos a almacenar en localStorage el contador de visitas

let guardado = localStorage.getItem("visitas");
console.log("Lo que ya está guardado: ", guardado);

if (guardado === null){
    guardado = 1;
} else {
    guardado = Number(guardado) + 1;
}

console.log("Guardado: ", guardado)

localStorage.setItem("visitas", guardado) //Guardamos en localStorage

visitas.textContent = `Visita número: ${guardado}` //mostramos las visitas


//Vamos a guardar una lista : JSON
const textoFavoritos = localStorage.getItem("favoritos");

const favoritos = textoFavoritos === null ? [] : JSON.parse(textoFavoritos); //Comprobamos si tenemos algo almacenado, si está vacío devolvemos un null, sino lo convertimos a array

for (const libro of libros){ //Recorremos todos los libros de la página web para ver si el nómbre del libro está en favoritos
    const titulo = libro.querySelector(".titulo").textContent; //recogemos del nodo y con textContent obtenemos el texto
    if (favoritos.includes(titulo)){ //Ahora comprobamos si en favoritos está el libro
        libro.classList.add("destacado"); //Aquí, si lo tenemos almacenado en localStorage, a la clase padre del html le añadimos destacado, primero miramos la memoria, si no, lo añadiremos luego
    }
}
for (const libro of libros){
    libro.querySelector("button").addEventListener("click", () =>{
        libro.classList.toggle("destacado");
        //Filtramos los que tienen la clase destacado y con map solo guardamos el título
        const marcados = libros //Queremos que se sobreescriba constantemente, así es más simple
                .filter((l) => l.classList.contains("destacado"))
                .map((l) => l.querySelector(".titulo").textContent);

            localStorage.setItem("favoritos", JSON.stringify(marcados)); //Convierto para que lo entienda localStorage
    });
}

//Vamos a cambiar y recordar el tema del usuario
const botonTema = document.querySelector("#tema");


if (localStorage.getItem("oscuro") === 'true'){ //Al comprobar si está en localStorage, lo cambiamos, si no, añadimos después los eventos para incluirlos
    document.body.classList.add("oscuro");
}


botonTema.addEventListener("click", () =>{
    const estoyOscuro = document.body.classList.toggle("oscuro"); //Toggle devueve true si la clase se añade, false si se quita
    localStorage.setItem("oscuro", estoyOscuro); //Guarda true o false, pero localStore no guarda bool, guarda strings ("true" o "false")
});