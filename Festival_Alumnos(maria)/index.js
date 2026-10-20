// Aquí se escribe el programa.
import {Grupo} from "./grupo.js";
import {inscripciones} from "./grupos.js";
import { Festival } from "./festival.js";

console.group("Montar el cartel")
//Creamos el festival y en grupos añadimos todos los grupos que vamos a añadir
const festival1 = new Festival("SonidosDelSur");
const grupos = inscripciones.map(insc => new Grupo(insc.nombre, insc.genero, insc.minutos));

//Añadimos los grupos
for (const grupo of grupos){
    festival1.annadirGrupo(grupo);
}

//Creamos Nébula
const nebula = new Grupo("Nébula", "electrónica", 90);
const alta = festival1.annadirGrupo(nebula);

//¿Se da de alta?
console.log("¿Se ha añadido el grupo? ", alta);

//Resumen
console.log("Resumen del festival: ", festival1.resumen());
console.groupEnd();

console.group("Inscripción fuera de plazo")
const minutosDelFormulario = "40";

//Sumar 5 sin parsear
console.log("Minutos del formulario ", minutosDelFormulario + 5);

//Parseamos y sumamos
const minutos = Number(minutosDelFormulario) + 5;

//Devolvemos la suma parseada
console.log("Minutos ya convertidos: ", minutos);

//Creamos tardeo, lo añadimos a festival y mostramos su ficha
const tardeo = new Grupo("Tardeo Club", "pop", minutos);
festival1.annadirGrupo(tardeo);
console.log("El nuevo grupo es:", tardeo.ficha());

//Indicamos si la actuación es larga
console.log("¿Dura más de 60 minutos? ", tardeo.esLargo() ? "Sí.": "No.");

//indicamos cuantos grupos tiene el cartel
console.log("¿Cuantos grupos tiene el cartel? ", festival1.cuantos());
console.groupEnd();


console.group("El informe");
//Creamos el cartel para imprimirlo como tabla con console.table
const cartel = festival1.cartel();
console.table(cartel.map(g => g.ficha()));

//Creamos un array nuevo con los grupos que su duración sea superior a la hora y los mostramos
const largos = cartel.filter(g => g.esLargo());
console.log("¿Cuántas actuaciones pasan de 60 minutos? ", largos.length)

//Mostramos los nombres
console.log("Nombres: ", cartel.map(g => g.nombre()).join(", "));

//Primera actuación > 60 minutos
const primeroLargo = cartel.find(g => g.esLargo());
console.log("La primera actuación que supera los 60 minutos es: ", primeroLargo.ficha());

//Duración total del festival
const duracionTotal = cartel.reduce((acumulador, g) => acumulador += g.minutos(), 0);
console.log("Duración total: ", duracionTotal);

//Generamos un cartel ordenado de mayor a menor duración y desectruturamos por posición
const cartelAlOrdenar = [...cartel];
cartelAlOrdenar.sort((a, b) => b.minutos() - a.minutos());


const [primero, segundo] = cartelAlOrdenar;
console.log("La actuación más larga: ", primero);
console.log("La segunda actuación más larga: ", segundo);


//Every para conseguir el total de las que pasan de 30 minutos
console.log("¿Todos pasan de media hora?", cartel.every(g => g.minutos() > 30));
console.groupEnd();

console.group("Guardar el cartel");
//Convertimos a str mediante stringify
const paraGuardar = cartel.map(g => ({nombre: g.nombre(), minutos: g.minutos()}));
const texto = JSON.stringify(paraGuardar);
console.log(("Como texto: ", texto));

//Convertimos a objeto mediante parse
const recuperado = JSON.parse(texto);
console.log(("Recuperado: ", recuperado));



console.groupEnd;