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

localStorage.setItem("visitas", guardado)


//Vamos a guardar una lista : JSON

const textoFavoritos = localStorage.getItem("favoritos");
//Primero almacenamos y luego recuperamos


//Almacenamos en localstorage los favoritos


//Recorremos favoritos

for (const libro of libros){
    libro.querySelector("button").addEventListener("click", () =>{
        libro.classList.toggle("destacado")
    })
}