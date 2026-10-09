const socio = {
    nombre: "María",
    carnet: "b-12",
    activo: true,
}

console.log("EL OBJETO: ");

console.log(socio);


const texto = JSON.stringify(socio);

console.log("JSON A TEXTO");

console.log(texto);


const vuelta = JSON.parse(texto);

console.log("TEXTO A JSON");

console.log(vuelta);

console.log(vuelta.nombre);
console.log(vuelta.carnet);


const socioCompleto = {
    nombre: "María",
    avisos: undefined,
    carnet: "b-12",
    activo: true,
    saludo(){
        return "Holiwis"
    },
}

console.log(socioCompleto.saludo());

const illo = JSON.stringify(socioCompleto);

console.log(illo);

const acho = JSON.parse(illo);

//Se pierden los métodos y lo que sea undefined.

console.log(acho);


