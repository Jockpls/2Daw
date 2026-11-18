//El tiempo con promesas

const coordenadas = {
  Córdoba: [37.89, -4.77],
  Sevilla: [37.39, -5.99],
  Granada: [37.18, -3.6],
};

const ciudad = document.querySelector("#ciudad");
const tiempo = document.querySelector("#tiempo");
const estado = document.querySelector("#estado");
//const = document.querySelector("");
//const = document.querySelector("");
//const = document.querySelector("");

const urlCordoba = "https://api.open-meteo.com/v1/forecast?latitude=37.89&longitude=-4.77&current=temperature_2m,wind_speed_10m";

//hacemos una petición a una URL y nos devuelve una promesa
const promesa = fetch(urlCordoba);
console.log(promesa);

//cuando se cumple la promesa: then y json
tiempo.addEventListener("click", () =>{
    estado.textContent = "Consultando primo....";

    const [latitud, longitud] = coordenadas[ciudad.value];
    const url  = `https://api.open-meteo.com/v1/forecast?${latitud}&${longitud}&current=temperature_2m,wind_speed_10m`;

    //Cuando es una petición con fetch tengo que tener 2 then MÍNIMO:
    //1 PARA LA RESPUESTA 
    //2 PARA LOS DATOS
    fetch(url)
    .then()
    .then()

})