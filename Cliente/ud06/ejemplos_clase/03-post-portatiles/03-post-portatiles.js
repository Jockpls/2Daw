//Crear con Post

const lista = document.querySelector("#lista");
const prueba = document.querySelector("#prueba");
const formulario = document.querySelector("#alta");
const resultado = document.querySelector("#resultado");
const campoCodigo = formulario.querySelector("#codigo");
const campoModelo = formulario.querySelector("#modelo");

function limpiarLista(){
    const items = lista.querySelectorAll("li");
    for (const i of items){
        i.remove();
    }
}

async function cargarLista() {
    limpiarLista();
    
    resultado.textContent = "Se vienen cositas...";

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
        resultado.textContent = `Hay ${portatiles.length} portatiles en el inventario`;

    } catch (error) {
        resultado.textContent = `No se ha podido cargar la lista. ${error.message}`        
    }
}

cargarLista();

async function altaPrueba() {
    const nuevo = {codigo: "GC-09", modelo: "HP ProBook 404"};
    resultado.textContect = `Conecting pipol`;

    try {
        const response = await fetch("/api/portatiles.php", {
            //method: el tipo de petición, POST crear, sin method: Get por defecto
            method: "POST",
            //cabeceras: datos que viajan con la petición además de un cuerpo
            headers: {"Content-Type": "application/json"},
            //body: lo que se envía
            body: JSON.stringify(nuevo), //convertimos para enviarlo como texto '{"codigo": "GC-09", "modelo": "HP ProBook 404"}'
        })
        if(!response.ok){
            throw new Error(`Código: ${response.status}`);
        }
        const data = await response.json();

        resultado.textContect = `Creado el portatil ${data.id} - ${data.estado}`
        cargarLista();


    } catch (error) {
        resultado.textContect = `No se ha podido consultar. ${error.message}`;
    }

}

prueba.addEventListener("click", altaPrueba)

//Vamos a crear un portatil nuevo desde los datos del formulario
async function altaFormulario(evento) {
    evento.preventDefault();
    //Podríamos pasar los valores sin clave, solo valor, si se llama igual que la clave
    const nuevo = {codigo: campoCodigo.value, modelo: campoModelo.value}

    try {
        const response = await fetch("/api/portatiles.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(nuevo)
        })
        if(!response.ok){
            throw new Error(`Código: ${response.status}`);
        }
        
        formulario.reset();
        cargarLista();
    } catch (error) {
        resultado.textContect = `No se ha podido consultar. ${error.message}`;
    }
    
}
//El submit va sobre formulario weon
formulario.addEventListener("submit", altaFormulario);
