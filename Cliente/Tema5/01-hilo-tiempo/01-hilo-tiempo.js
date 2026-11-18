//UN SOLO HILO, TRABAJAMOS CON setTimeout

const consultar = document.querySelector("#consultar");
const bloquear = document.querySelector("#bloquear");
const contador = document.querySelector("#contador");
const estado = document.querySelector("#estado");


//Tenemos un botón para comprobar que la página responde
let pulsaciones = 0;

contador.addEventListener("click", () =>{
    pulsaciones++;
    contador.textContent = `Pulsaciones: ${pulsaciones}`;
})

//Esperar una respuesta sin bloquear mi página
//setTimeout deja un encargo al navegador
consultar.addEventListener("click", ()=>{
    console.log("Pido el tiempo de Córdoba");
    estado.textContent = `Consultando...`

    
    setTimeout(()=>{
        console.log("Llega el tiempo....")
        estado.textContent = "Córdoba, 18ºC, lluvioso"
    }, 2000); //2000ms que son 2segundos

    console.log("La pagina sigue funcionando");
})

//Vamos a bloquear la página mientras espera
bloquear.addEventListener("click", ()=>{
    estado.textContent = "Calculando....";

    const fin = Date.now() + 5000 //Suma a la hora actual 5segundos

    while(Date.now() < fin){
        //Nada
    }
    
    estado.textContent = "Cálculo terminado";
})


