//
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

        //console.log("Tengo algo ya", portatiles[0].modelo);
        //Vamos a ver cuántos portátiles tenemos
        aviso.textContent = `El servidor tiene ${portatiles.length} portátiles en el inventario.`



    } catch(error){
        aviso.textContent = `No se ha podido consultar. ${error.message}`;
    }


}

async function pedirInexistente() {
    aviso.textContent = "Consultando jefe"
    
    try {
        const response = await fetch("api/portatilMal.php");
            if(!response.ok){
                throw new Error(`Código: ${response.status}`);
            }
        const datos = await response.json();
        aviso.textContent = `Han llegado datos: ${datos}`;
        
    } catch (error) {
        aviso.textContent = `No se ha podido consultar: ${error.message}`;
    }
}

lista.addEventListener("click", cargarLista);

inexistente.addEventListener("click", pedirInexistente);