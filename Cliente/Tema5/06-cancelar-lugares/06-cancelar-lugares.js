//Cancelamos si tarda demasiado

//El boton buscar BIEN no lo acemos porque está hecho ya en prácticas anteriores
const resultado = document.querySelector("#resultado");




async function servidorLento(){
    try {
        const response = await fetch("https://httpbin.org/delay/5", { signal: AbortSignal.timeout(2000) });
        //AbortSignal candela la petición si tarda más de 3 segundos
        
        resultado.textContent = `Ha contestado con el cógido ${response.status}`;

    } catch (error) {
        if(error.name === "TimeoutError"){
            resultado.textContent = "Servidor lento, intentelo más tarde";
        } else {
            resultado.textContent = `No se ha podido consultar. ${error.message}`
        }

    }
}

document.querySelector("#lento").addEventListener("click", servidorLento);