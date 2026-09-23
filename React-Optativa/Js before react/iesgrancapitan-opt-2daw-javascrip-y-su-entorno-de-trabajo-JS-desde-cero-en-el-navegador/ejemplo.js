// Ejemplo de uso de variables
let nombre = "Percebeto";
let edad = 20;

// Uso de funciones built-in
console.log("Nombre en mayúsculas:", nombre.toUpperCase());
console.log("Edad como string:", edad.toString());

//Uso de template literals
console.log(`Hola, ${nombre}. Tienes ${edad} años.`);


// Definición y uso de funciones
function saludar(persona) {
    return "Hola, " + persona + "!";
}
console.log(saludar(nombre));

