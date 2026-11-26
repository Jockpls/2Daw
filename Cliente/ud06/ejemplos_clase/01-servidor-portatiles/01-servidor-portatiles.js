//
const lista = document.querySelector("#lista");
const inexistente = document.querySelector("#inexistente");
const aviso = document.querySelector("#aviso");

async function cargarLista() {
    aviso.textContent = "Cargando la lista....";
    
    try {
        const respuesta = await fetch("/api/portatiles.php");
        if(!respuesta.ok){
            throw new Error(`Código: ${respuesta.status}`);
        }
        const portatiles = await respuesta.json();

        console.log("Tengo algo ya", portatiles[0].modelo);
        


    } catch(error){
        aviso.textContent = `No se ha podido cargar. ${error.message}`;
    }


}

lista.addEventListener("click", cargarLista);