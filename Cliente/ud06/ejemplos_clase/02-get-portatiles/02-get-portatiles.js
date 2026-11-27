//Usamos GET con argumentos, se los pasamos en la URL

const lista = document.querySelector("#lista");
const aviso = document.querySelector("#aviso");
const campoId = document.querySelector("#id");
const ficha = document.querySelector("#ficha");

//Cargamos la liusta de todos los portátiles

async function cargarLista() {
    aviso.textContent = "Se vienen cositas...";
    try {
        const response = await fetch("/api/portatiles.php");
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        const portatiles = await response.json();

        for (const portatil of portatiles){
            const item = document.createElement("li");
            item.textContent = `${portatil.codigo} - ${portatil.modelo} - ${portatil.estado}`;
            lista.append(item);
        }
        aviso.textContent = `Hay ${portatiles.length} portatiles en el inventario`;

    } catch (error) {
        aviso.textContent = `No se ha podido cargar la lista. ${error.message}`        
    }
}

cargarLista();

//vamos a localizar un elemento concreto con Get y un argumento

async function verFicha() {
        aviso.textContent = "Consultanding...";
    try {
        const response = await fetch(`/api/portatiles.php?id=${campoId.value}`);
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        const datos = await response.json();
        ficha.textContent = `${datos.codigo} - ${datos.modelo} - ${datos.estado}`;
        aviso.textContent = `Hay respuesta`;

    } catch (error) {
        aviso.textContent = `No se ha podido cargar: ${error.message}`        
    }
}

document.querySelector("#ver").addEventListener("click", verFicha);
