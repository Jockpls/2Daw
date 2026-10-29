// Series por ver

// Las series que muestra la página la primera vez que se abre.
const seriesDePartida = [
  { titulo: "Ataque a los titanes", vista: true },
  { titulo: "Frieren", vista: false },
  { titulo: "Guardianes de la noche", vista: false },
  { titulo: "Spy x Family", vista: false },
  { titulo: "Haikyuu!!", vista: false },
];

const botonTema = document.querySelector("#tema");

//Comprobar si hay tema guardado en memoria
if(localStorage.getItem("tema") === "oscuro"){
  document.body.classList.add("oscuro")
}

//Cambiar el tema con el boton

botonTema.addEventListener("click", () =>{
  document.body.classList.toggle("oscuro");
  if(document.body.classList.contains("oscuro")){
    localStorage.setItem("tema", "oscuro"); //Pasamos clave valor, así la definimos para cuando vayamos a comprobar en memoria
  } else {
    localStorage.setItem("tema", "claro"); //Pasamos clave valor
  }
})

//Vamos a cargar las series del usuario
//1º mirar si hay series en el localstorage, si no, cargamos las de partida
const seriesGuardadas = localStorage.getItem("series");

let series = seriesGuardadas === null ? seriesDePartida : JSON.parse(seriesGuardadas); //Si es null carg las tenía de serie, si no, las parseamos

//2º Guardamos por si las que se han cargado son las de Partida

localStorage.setItem("series", JSON.stringify(series));