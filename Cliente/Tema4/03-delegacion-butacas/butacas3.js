//Propagación, delegación y closest

const sala = document.querySelector("#sala");
//const = document.querySelector("");
//const = document.querySelector("");

const filas = ["A", "B", "C", "D", "F"];
const ocupadas = ["C4", "C5", "F1"];

for (const letra of filas){
    const fila = document.createElement("div");
    fila.classList.add("fila");
    //vamos a crear las butacas dentro de cada fila
    for (let numero=1; numero<=10; numero++ ){
        const butaca = document.createElement("button");
        butaca.classList.add("butaca");
        
        const spanLetra = document.createElement("span");
        spanLetra.classList.add("letra");
        spanLetra.textContent = letra;
    
        const spanNumero = document.createElement("span");
        spanNumero.textContent = numero;
        
        butaca.append(spanLetra, spanNumero); //Añadimos a butaca los dos span que hemos creado
        
        if(ocupadas.includes(`${letra}${numero}`)){ //marcamos las ocupadas
            butaca.classList.add("ocupada")
        }

        fila.append(butaca); //Aqui añadimos el boton butaca
    }
    sala.append(fila);
}

//Propagación
sala.addEventListener("click", (evento)=>{ //Se lo añado al padre y los hijos lo heredan también 
    console.log("Clcik dentro de sala, sobre: ", evento.target);
    //evento.target.classList.toggle("elegida");
})
document.addEventListener("click", ()=>{
    console.log("También llega hasta document");
    
})

//Delegación
const aviso = document.querySelector("#aviso");

//sala.addEventListener("click", (evento)=>{ //Vamos a colorear las butacas
//    if (!evento.target.classList.contains("butaca")){
//        return;
//    } else if (evento.target.classList.contains("ocupada")){
//        aviso.textContent = `La butaca ${evento.target.textContent} está ocupada`;
//        return;
//    } else {
//        evento.target.classList.toggle("elegida");
//    }
//})


//Delegación con closest
sala.addEventListener("click", (evento)=>{
    const butacaSelect = evento.target.closest(".butaca"); //Quedate con el elemento familiar mío más cercao a mi (de mi familia) que contenga la clase butaca
    if(!butacaSelect){
        return;
    } else if (butacaSelect.classList.contains("ocupada")){
        aviso.textContent ="La butaca está ocupada "
    } else {
        butacaSelect.classList.toggle("elegida");
    }
})