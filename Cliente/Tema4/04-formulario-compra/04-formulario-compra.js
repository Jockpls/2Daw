//Formularios

const formulario = document.querySelector("#compra");

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault(); //Rompemos lo que ya trae submit

    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const entradas = document.querySelector("#entradas").value;
    const sesion = document.querySelector("#sesion").value;

    //especificamos que opción del radiobutton nos quedamos, con querySelectorAll nos devolvería todos, y sin checked nos devolvería solo el primer componente del array
    const version = document.querySelector('input[name="version"]:checked').value;
    const acepta = document.querySelector("#condiciones").checked; //Este comprueba el checkbox

    const resumen = document.querySelector("#resumen");
    if(!acepta){
        resumen.textContent = "Hay que aceptar las comprobaciones";
        return;    
    };
    
    console.log(acepta);

    const precio = sesion =="18:00" ? 5 : 7;
    const total = entradas * precio;
    resumen.textContent = `Compra a nombre de ${nombre}\n` + 
    `Entradas ${entradas} - Sesión de las ${sesion} - Version: ${version}\n` +
    `Total ${total}€ \n` +
    `Confirmación a ${correo}`;
    
});