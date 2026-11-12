//Validar formulario
const formulario = document.querySelector("#compra");
const aviso = document.querySelector("#aviso");
const correo = document.querySelector("#correo");


formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault(); //Evitamos que se evite antes de hacer nada

    if(!formulario.checkValidity()){ //novalidate en el html para poder acceder a esto, si no, se usa para comprobar
        aviso.textContent="Corrige los campos";
        return;
    }
    aviso.textContent = "Compra realizada";   
})


correo.addEventListener("input", ()=>{
    //console.log(correo.validity["valid"]); Valida el tipo de dato que le llega desde HTML
    console.log(correo.validity);
    
})
