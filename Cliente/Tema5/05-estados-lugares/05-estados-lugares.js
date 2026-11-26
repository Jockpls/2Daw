//Buscador de lugares con 4 estados: cargando, error, vacío y éxito

const nombre = document.querySelector("#nombre");
const buscador = document.querySelector("#buscar");
const lista = document.querySelector("#lista");
const aviso = document.querySelector("#aviso");

let estado = "";
let lugares = [];
let mensajeError = "";

async function buscar(){
    estado= "Cagando...";

    try{
    const urlBusqueda = `https://geocoding-api.open-meteo.com/v1/search?name=${nombre.value}&count=10&language=es&countryCode=ES`;

    const response = await fetch(urlBusqueda);
    if(!response.ok){
        throw new Error(`Código: ${response.status}`)
        }
    
    const datos = await response.json();
    if(datos.results === undefined){
        estado = "Vacío";
    } else {
        lugares = datos.results;
        estado = "Éxito";
        }

    } catch (error){
        estado = "Error";
        mensajeError = error.message;
        }
//vamos a pintar los lugares de mi lista
//Primeros borramos lo que ya tenga la lista
    for (const item of lista.querySelectorAll("li")){
        item.remove();
    }

    if (estado === "cagando..."){
        aviso.textContent = "Buscando..."
    } else if (estado === "Vacío"){
        aviso.textContent = "No se encuentra ese lugar"
    } else if (estado === "Error"){
        aviso.textContent = `No se ha podido buscar . ${mensajeError}`;
    } else if (estado === "Éxito") {
        aviso.textContent = `${lugares.length} resultados`;

        for (const lugar of lugares){
            const item = document.createElement("li")
            item.textContent = `${lugar.name} (${lugar.admin2})`;
            lista.append(item);
        }


    }

}


buscador.addEventListener("click", buscar);
