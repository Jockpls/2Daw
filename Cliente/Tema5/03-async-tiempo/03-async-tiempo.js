//ASYNC Y AWAIT, try/catch

const urlCordoba = "https://api.open-meteo.com/v1/forecast?latitude=37.89&longitude=-4.77&current=temperature_2m,wind_speed_10m";

const estado = document.querySelector("#estado");
const boton = document.querySelector("#cordoba");
const imposible = document.querySelector("#imposible");


async function tiempoCordoba() { //Con async marcamos una función que espera promesas
    estado.textContent = "Consultando...";
    const respuesta = await fetch(urlCordoba) //Guardamos en una variable lo que devuelva la promesa, respuesta no existe hasta que no se cumpla la promesa
    //No sería necesario en este caso utilizar el SetTimeOut porque el servidor responde, con try/catch manejas las respuestas que devuelve el servidor 
    const datos = await respuesta.json(); //con await sustituimos el then()
    
    estado.textContent = `Córdoba: ${datos.current.temperature_2m}ºC`;
}

boton.addEventListener("click", tiempoCordoba);

//El servidor nos conteste pero con un error
//Después de un fetch, antes de tocar sus datos, tenemos que mirar respuesta.ok

async function latitudImposible(){
    estado.textContent = "Consultando...";

    try{
        const response = await fetch("https://api.open-meteso.com/v1/forecast?latitude=37.89&longitude=-4.77&current=temperature_2m,wind_speed_10m");
        if(!response.ok){
            throw new Error(`Código ${response.status}`);
        }
        const datos = await response.json();
        estado.textContent = `${datos.current.temperature_2m}ºC`

    } catch(error){
        estado.textContent = `No se ha podido consultar. ${error.message}`
    }
}

imposible.addEventListener("click", latitudImposible);




