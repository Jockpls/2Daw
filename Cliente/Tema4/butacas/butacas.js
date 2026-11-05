//Objeto Evento

const comprar = document.querySelector("#comprar");
const butacas = [...document.querySelectorAll(".butaca")];
const aviso = document.querySelector("#aviso");
const salir = document.querySelector("#salir");


//Vemos las propiedades de un evento
comprar.addEventListener("click", (evento) =>{ //evento es un objeto que se genera con la acción, no existe hasta que no se ejecuta
    console.log(evento);
    console.log("Tipo", evento.type);
    console.log("Elemento", evento.target);
})

//Asociamos una función a todas atodas las butacas
function elegir(evento){ //Este objeto no se genera hasta que no ocurre la acción, y es distinto de los demas eventos
    if(evento.target.classList.contains("ocupada")){ //dentro del objeto evento pregunto por las que contienen la clase ocupada
        aviso.textContent = `La butaca ${evento.target.textContent} está ocupada`;
        return; //termino la función elegir aquí, no quiero que siga pintando
    }     
    //console.log("Butaca seleccionada", evento.target);
    evento.target.classList.toggle("elegida");

    //Añadimos o quitamo a la lista la nueva butaca
    const elegidas = [...document.querySelectorAll(".elegida")].map(butaca => butaca.textContent);
    if(elegidas.length === 0){
        aviso.textContent = "Elige una butaca"
    } else {
        aviso.textContent = elegidas.join(", ");
    }

}

for(const butaca of butacas){
    butaca.addEventListener("click", elegir) //No recibe el argumento en la llamada pero sí lo recibe en la declaración
}

//Preguntamos si estamos seguros de querer salir de la página
salir.addEventListener("click", (accion)=>{
    if(!confirm("¿Salir de la página sin terminar la compra?")){
        accion.preventDefault(); //Quita la función que tenga por defecto
    }
})
