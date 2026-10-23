const pedir = document.querySelector("#pedir");
const reiniciar = document.querySelector("#reiniciar");
const prestamos = document.querySelector("#prestamos");
const buscador = document.querySelector("#buscador");
const catalogo = [...document.querySelectorAll(".libro")];

//Reaccionamos a un clic

let cont_prestamos = 0;

function sumar(){
    cont_prestamos++;
    return cont_prestamos;
}

//pedir.addEventListener("click", /*función que quiero que ocurra*/ sumar); //No le ponemos parentesis para que no se ejecute la función
pedir.addEventListener("click", /*función que quiero que ocurra*/ ()=>{
    cont_prestamos++;
    prestamos.textContent = `Préstamos: ${cont_prestamos}`;
}); //No le ponemos parentesis para que no se ejecute la función


//Reaccionamos a la escritura en un input

buscador.addEventListener("input", ()=>{
    console.log("En el buscador está escrito: ", buscador.value);
});

//decidir según lo escrito en buscador

function filtrar(){
    const textoInput = buscador.value.toLowerCase();

    for (const libro of catalogo){
        const titulo = libro.querySelector(".titulo").textContent.toLowerCase()
        //El título contiene lo que ha escrito el usuario??
    
        if(titulo.includes(textoInput)){
            libro.classList.remove("oculto");
        } else {
            libro.classList.add("oculto");
        }
    }
}

buscador.addEventListener("input", filtrar);