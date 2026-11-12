const formulario = document.querySelector("#compra");
const aviso = document.querySelector("#aviso");
const telefono = formulario.querySelector("#telefono"); //Elegimos el telefono desde formulario, en caso de que haya dos, así nos aseguramos de cuál queremos



//Haciendo uso solo de la comprobación del html
//formulario.addEventListener("submit", (evento)=>{
//    evento.preventDefault();
//
//    if(!formulario.checkValidity()){
//        aviso.textContent = "Hay campos por corregir";
//        return;
//    }
//
//    aviso.textContent =`Compra realizada. La confirmación llegara a ${telefono.value}`
//
//})


//PROBAR UN PATRÓN: test
const movil = /^[67]\d{8}$/; //Si no se usa el ^$ solo va a buscar el patrón, pero no va a buscar que el contenido solo sea eso
const pruebas = ["612345879", "712345689", "812345689", "6135465216854625154"];

for (const p of pruebas){
    console.log(p, movil.test(p));
}

//Vamos a usar en el formulario el test
formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    if(telefono.value == '' || !movil.test(telefono.value)){
        aviso.textContent = "Número de telefono incorrecto"
    } else {
        aviso.textContent = "Adelante maricarmen"
    }
})


