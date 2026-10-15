// Aquí se escribe el programa.
import { Grupo } from "./grupo.js";
import { Festival } from "./festival.js";
import { inscripciones } from "./grupos.js";

//Creamos el primer festival
const festival1 = new Festival("Sonidos del Sur");

//Generamos un array de objetos
const grupos = inscripciones.map(i => new Grupo(i.nombre, i.genero, i.minutos));

//Se usa el for para añadir de uno a uno
for (const grupo of grupos){
    festival1.addGrupo(grupo);
}

//Para agrupar por apartados en la consola
console.group("Modificaciones del Festival");

const nebula = new Grupo("Nébula", "electrónica", 90);
const almacenado = festival1.addGrupo(nebula);

console.log(almacenado == true ? "Se ha añadido." : "Ya estaba en el cartel.");

console.log("Este es el cartel de", festival1.resumen());


//Si intento sumar un numero a una cadena, la concatena como un str, no hace la suma.
const minutosDelFormulario = "40";
console.log("Minutos del formulario ", minutosDelFormulario + 5)
const minutos = Number(minutosDelFormulario) + 5;

const tardeo = new Grupo("Tardeo Club", "Pop", minutos);

festival1.addGrupo(tardeo);
console.log("La ficha del nuevo grupo añadido ", tardeo.ficha());

//Comprobamos si tardeo tiene duración larga
console.log("¿Es de larga duración?", tardeo.esLargo() ? "Sí.": "No.");

console.log("El festival tiene ", festival1.cuantos()," grupos");

console.groupEnd();


console.group("INFORME");

const cartel = festival1.cartel();
//console.table no puede recibir objetos, por eso creamos un objeto desde cartel.
console.table(cartel.map(g => ({nombre: g.nombre(), minutos: g.minutos()})));
console.table(cartel.map(g => g.ficha()));

//Comprobar las actuaciones que pasan de 60 minutos
const largos = cartel.filter(g => g.esLargo());
console.log("Actuacionesde más de 60 minutos: ", largos.length);
console.log("Nombre:", cartel.map(g => g.nombre()).join(", "));

const primeroLargo = cartel.find(g => g.esLargo())
console.log("La primera actuación larga es:", primeroLargo.ficha());

//Duración total en minutos
const totalMinutos = cartel.reduce((acumulador, g) => acumulador + g.minutos(), 0);
console.log("El festival dura:", totalMinutos, "minutos");

const cartelAOrdenar = [...cartel];
cartelAOrdenar.sort((a, b) => b.minutos() - a.minutos());

console.table(cartelAOrdenar.map(grupo => grupo.ficha()));


//Desestructurar pot posición
//const [primero, segundo, tercero ] = ["María", "Antonio", "Carmen"]
//const [primero, segundo ] = ["María", "Antonio", "Carmen"]

const [primero, segundo] = cartelAOrdenar; 
console.log("Actuación más larga", primero.ficha());
console.log("Segunda actuación más larga", segundo.ficha());


///Comprobar más de 30 minutos
console.log("¿Pasan todos de media hora?", cartel.every(g => g.minutos() > 30));

console.groupEnd();

//Guardar CARTEL.
console.group("GUARDAR");

const paraGuardar = cartel.map(g => ({nombre: g.nombre(), minutos: g.minutos()}))

const texto = JSON.stringify(paraGuardar); //Conversión a texto
console.log("A texto: ", texto);

const recuperado = JSON.parse(texto); //Conversión a objeto
console.log("Recuperado: ", recuperado);



console.groupEnd();

