//Buscador de lugares con 4 estados: cargando, error, vacío y éxito

const nombre = document.querySelector("#nombre");
const buscador = document.querySelector("#buscar");
const lista = document.querySelector("#lista");
const aviso = document.querySelector("#aviso");
const tiempo = document.querySelector("#tiempo");

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
            item.dataset.latitude = lugar.latitude;
            item.dataset.longitud = lugar.longitude;
            item.textContent = `${lugar.name} (${lugar.admin2})`;
            lista.append(item);
        }
    }
    tiempo.textContent = "Pulsa un lugar para ver su tiempo";
}


buscador.addEventListener("click", buscar);



lista.addEventListener("click", async (evento) => {
    const item = evento.target.closest("li");
    estado = "Cargando...";
    const urlTiempo = `https://api.open-meteo.com/v1/forecast?latitude=${item.dataset.latitude}&longitude=${item.dataset.longitud}&current=temperature_2m,wind_speed_10m`;
    try {
        const respuesta = await fetch(urlTiempo);
        
        if (!respuesta.ok){
            throw new Error(`Código: ${respuesta.status}`)
        }
        const datitos = await respuesta.json();
        if(datitos === undefined){
            estado = "Vacío";
        } else {
            tiempo.textContent = `El tiempo en ${item.textContent} es de ${datitos.current.temperature_2m}ºC con viento de ${datitos.current.wind_speed_10m}km/h`;
        }

    }catch (Error){
        estado = "Error";
        mensajeError = error.message;
        }
    }
);