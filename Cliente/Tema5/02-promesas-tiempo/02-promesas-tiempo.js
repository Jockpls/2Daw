//El tiempo con promesas

const coordenadas = {
  Córdoba: [37.89, -4.77],
  Sevilla: [37.39, -5.99],
  Granada: [37.18, -3.6],
};

const ciudad = document.querySelector("#ciudad");
const tiempo = document.querySelector("#tiempo");
const estado = document.querySelector("#estado");
const botonEquivocado= document.querySelector("#equivocado");
//const = document.querySelector("");
//const = document.querySelector("");

const urlCordoba = "https://api.open-meteo.com/v1/forecast?latitude=37.89&longitude=-4.77&current=temperature_2m,wind_speed_10m";

//hacemos una petición a una URL y nos devuelve una promesa
const promesa = fetch(urlCordoba); //con fetch hacemos la petición al servidor
console.log(promesa);

//cuando se cumple la promesa: then y json
tiempo.addEventListener("click", () =>{
    estado.textContent = "Consultando primo....";

    const [latitud, longitud] = coordenadas[ciudad.value];
    const url  = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current=temperature_2m,wind_speed_10m`; //A la url le añadimos nuestras variables de latitud y longitud en los params
    const urlDaily  = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current=temperature_2m,wind_speed_10m,temperature_2m_max`; //A la url le añadimos nuestras variables de latitud y longitud en los params

    //Cuando es una petición con fetch tengo que tener 2 then MÍNIMO:
    //1 PARA LA RESPUESTA A LA QUE NO ACCEDO HASTA QUE LLEGA 
    //2 PARA LOS DATOS
    //En el fetch anterior como no accediamos a ningun dato no necesitamos then.

    fetch(url) //hago la petición
    .then((respuesta)=> respuesta.json())//lEEMOS EL JSON QUE NOS HA MANDADO EL SERVIDOR Y LO CONVERTIMOS EN UN OBJETO DE js, PARA PODER ACCEDER A LOS DATOS CON EL PUNTO 
    .then((datos) => {
      fetch(urlDaily)
      .then((response)=> response.json())
      .then(data => {
        console.log("Datos");
        console.log(datos);
        console.log("Data");
        console.log(data);
        estado.textContent = `${ciudad.value}: ${datos.current.temperature_2m}ºC, con una temperatura máxima de ${data.current.temperature_2m_max}ºC y un viento de ${datos.current.wind_speed_10m} km/h`
      })
    })//Ese argumento serán los datos de la respuesta del fetch anterior

})

botonEquivocado.addEventListener("click", ()=>{
  estado.textContent = "Consultando...";

  fetch("https://api.open-meteooooooooooo.com/v1/forecast")
  .then((respuesta)=> respuesta.json())
  .then((datos) => {
    estado.textContent = `Han llegado datos: ${datos}`;
  })
  .catch((error)=>{
    estado.textContent = `No se ha podido consultar. ${error.message}`
  })
})