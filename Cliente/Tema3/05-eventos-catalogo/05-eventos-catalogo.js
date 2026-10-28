const pedir = document.querySelector("#pedir");
const reiniciar = document.querySelector("#reiniciar");
const prestamos = document.querySelector("#prestamos");
const buscador = document.querySelector("#buscador");
const catalogo = [...document.querySelectorAll(".libro")];
const resultados = document.querySelector("#resultados");

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

    //Vamos a definir un contador de coincidencias

    let coinciden = 0;

    for (const libro of catalogo){
        const titulo = libro.querySelector(".titulo").textContent.toLowerCase()
        //El título contiene lo que ha escrito el usuario??
    
        if(titulo.includes(textoInput)){
            libro.classList.remove("oculto");
            coinciden++
        } else {
            libro.classList.add("oculto");
        }
    }
    resultados.textContent =` Resultados: ${coinciden}`
}

buscador.addEventListener("input", filtrar);

//AÑADIMOS EVENTO AL BOTÓN REINICIAR
reiniciar.addEventListener("click", ()=> {
    if (confirm("¿Seguro que quieres reiniciar los préstamos?")){
        prestamos.textContent = "Préstamos: 0";
        cont_prestamos = 0;
        alert("Prestamos a cero");
    }
})

//function results(){
//    let counter = 0;
//    for (const libro of catalogo){
//        if(libro.querySelector(".libro")){
//            ++counter;
//        }
//    }
//    resultados.textContent= `Resultados: ${counter}`
//}
//
//buscador.addEventListener("input", results)

/*Posibles errores
- Poner los parentesis al llamar a la función en filtrar (linea 46)
*/