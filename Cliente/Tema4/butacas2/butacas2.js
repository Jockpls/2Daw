//Tipos de eventos: dbclick, mouseenter, mouseleave, keydown con key, focus y blur

const butacas = [...document.querySelectorAll(".butaca")];
const aviso = document.querySelector("#aviso");
const info = document.querySelector("#info")
const pantalla = document.querySelector("#pantalla");
const codigo = document.querySelector("#codigo");

function pintarAviso() {
  const elegidas = [...document.querySelectorAll(".elegida")].map(
    (butaca) => butaca.textContent,
  );
  const lista = elegidas.join(", ");

  if (elegidas.length === 0) {
    aviso.textContent = "Elige una butaca";
  } else {
    aviso.textContent = `Elegidas: ${lista}`;
  }
}


function marcar(butaca) {
  if (butaca.classList.contains("ocupada")) {
    aviso.textContent = `La butaca ${butaca.textContent} está ocupada`;
    return;
  }
  butaca.classList.toggle("elegida");
  pintarAviso();
}

for (const butaca of butacas) {
  butaca.addEventListener("click", (evento) => {
    marcar(evento.target);
  });
}

//vamos a comprobar que el raton entra y sale de un elemento
for (const butaca of butacas){
    butaca.addEventListener("mouseenter", (evento)=>{
        const nombre = evento.target.textContent;
        if (evento.target.classList.contains("ocupada")){
        info.textContent =`Butaca ${nombre} está ocupada`;
        } else if (evento.target.classList.contains("elegida")){
            info.textContent = `Butaca ${nombre} está elegida`;
    } else {
            info.textContent = `Butaca ${nombre} está libre`;
    }
    });
    butaca.addEventListener("mouseleave", ()=>{
        info.textContent = "";
    })
}

//dblclick (doble click)

pantalla.addEventListener("dblclick", () =>{
    if (pantalla.textContent === "PANTALLA"){
        pantalla.textContent = "LA ULTIMA SESIÓN";
    } else {
        pantalla.textContent = "PANTALLA";
    }
})

//Evento del teclado: keydown (Tecla pulsada)
function desmarcarTodas(){
    for (const butaca of butacas){
        butaca.classList.remove("elegida");
    }
    aviso.textContent = "Elige una butaca";
}

document.addEventListener("keydown", (evento)=>{
    console.log("Tecla: ", evento.key);
    if (evento.key === "Escape"){
        desmarcarTodas();
    }
})

//focus
const ayuda = document.querySelector("#ayuda");

codigo.addEventListener("focus", ()=>{
    ayuda.textContent = "El código de descuento tiene 6 letras y números";
})
codigo.addEventListener("blur", ()=>{
    ayuda.textContent = "";
})

