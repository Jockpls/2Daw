// Series por ver

// Las series que muestra la página la primera vez que se abre.
const seriesDePartida = [
  { titulo: "Ataque a los titanes", vista: true },
  { titulo: "Frieren", vista: false },
  { titulo: "Guardianes de la noche", vista: false },
  { titulo: "Spy x Family", vista: false },
  { titulo: "Haikyuu!!", vista: false },
];

//Acceso a todos los elementos del dom
const botonTema = document.querySelector("#tema");
const lista = document.querySelector("#series");
const botonAnadir = document.querySelector("#anadir");
const inputTitulo = document.querySelector("#titulo");
const contador = document.querySelector("#contador");


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
function guardar(){
  localStorage.setItem("series", JSON.stringify(series));
};
guardar();


//Vamos a definir el Pintar las series en mi página
function pintar(){
 //Lo primero borramos las series que estén pintadas
  for (const item of lista.querySelectorAll("li")){
    item.remove();
  } 
  //Después creamos tantos <li> como sean necesarios
  for (const serie of series){
    const item = document.createElement("li");
    const nombre = document.createElement("span");
    nombre.classList.add("titulo");
    nombre.textContent = serie.titulo;
    if(serie.vista){
      item.classList.add("vista");
    }

    //El evento del botón QUITAR
    const boton_quitar = document.createElement("button");
    boton_quitar.textContent = "Quitar";
    boton_quitar.addEventListener("click", ()=>{
      if(confirm(`¿Quitar ${"serie.titulo"} de la lista?`)){ //Devuelve true o false
        series = series.filter((s) => s !== serie);
        guardar();
        pintar();
      }
    });

    //Evento de pulsar sobre una serie para ponerla vista o no vista
    nombre.addEventListener("click", ()=>{
        serie.vista = !serie.vista;
        guardar();
        pintar();
    });
  item.append(nombre, boton_quitar)
  lista.append(item);
  }

//Actualizar el contador de series por ver en la página y en el titulo

    const pendientes = series.filter(s => s.vista === false).length;
    
    if(series.length === 0){
      contador.textContent = "No hay series"
    } else{
      contador.textContent = `Quedan ${pendientes} por ver de ${series.length}`;
    }
    document.title = `(${pendientes}) Series por ver`;
  }
pintar();

//Añadimos series nuevas
botonAnadir.addEventListener("click", ()=>{
  const titulo = inputTitulo.value;
  const repetide = series.some(s => s.titulo.toLowerCase().trim() === titulo.toLowerCase().trim())
  if(titulo === ""){
    alert("Escribe el título de la serie")
  } else if(repetide){
    alert("Ya en la lista")
  } else {
    series.push({titulo: titulo, vista: false})
    guardar();
    pintar();
    
    inputTitulo.value = "";
  }
})


