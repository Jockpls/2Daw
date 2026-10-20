// ============================================================
// 1. VARIABLES, TIPOS Y CONVERSIONES
// ============================================================

const nombre = "Marta"; // string: texto
let edad = 42; // number: números enteros o decimales
const aprobado = true; // boolean: true o false
let pendiente; // undefined: todavía no tiene valor
const vacio = null; // null: ausencia de valor indicada a propósito

edad = 43; // let permite asignar otro valor

// const no permite reasignar la variable, pero el contenido de arrays
// y objetos declarados con const sí puede modificarse.
const notasEjemplo = [8, 5];
notasEjemplo.push(9); // correcto: cambia el array
notasEjemplo[0] = 10; // correcto: cambia un elemento

console.log(typeof "hola"); // "string"
console.log(typeof 25); // "number"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" (peculiaridad de JavaScript)
console.log(typeof [1, 2]); // "object"
console.log(Array.isArray([1, 2])); // true: comprueba si es un array

// Ojo: los valores que vienen de formularios suelen ser texto.
const minutosTexto = "40";
console.log(minutosTexto + 5); // "405": concatena texto
console.log(Number(minutosTexto) + 5); // 45: convierte a número primero
console.log(String(25)); // "25"

//diferencia entre parseInt y Number
console.log(parseInt("12px")); // 12
console.log(Number("12px")); // NaN


console.log("5" == 5); // true: compara después de convertir
console.log("5" === 5); // false: compara valor y tipo; preferir ===

// ============================================================
// 2. CONDICIONES, TERNARIO Y FUNCIONES
// ============================================================

const notaEjemplo = 7;

if (notaEjemplo >= 9) {
  console.log("Sobresaliente");
} else if (notaEjemplo >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}

// Ternario: condición ? valor_si_true : valor_si_false
const resultadoNota = notaEjemplo >= 5 ? "Aprobado" : "Suspenso";

function sumar(a, b) {
  return a + b; // devuelve el resultado
}

const sumarFlecha = (a, b) => a + b; // retorno implícito

const doble = (numero) => {
  return numero * 2; // con llaves hace falta return para devolver valor
};

const saludar = (nombre = "alumno") => `Hola, ${nombre}`;

console.log(sumar(2, 3)); // 5
console.log(sumarFlecha(2, 3)); // 5
console.log(doble(4)); // 8
console.log(saludar("Marta")); // "Hola, Marta"
console.log(saludar()); // "Hola, alumno"

// Plantillas de texto: usar comillas invertidas y ${expresión}.
console.log(`${nombre} tiene ${edad} años.`);

// ============================================================
// 3. DECIMALES, FORMATEO Y REDONDEO
// ============================================================

const precioEjemplo = 36.298;

console.log(precioEjemplo.toFixed(2)); // "36.30" (string)
console.log(Number(precioEjemplo.toFixed(2))); // 36.3 (number)
console.log(Math.round(precioEjemplo * 100) / 100); // 36.3 (number)

// Un número no conserva ceros decimales finales. Para mostrar 36.30,
// usa toFixed(2) al mostrarlo, aunque devuelva un string.

// ============================================================
// 4. ARRAYS: ACCESO Y RECORRIDO
// ============================================================

const notas = [8, 5, 9, 4, 7];

console.log(notas[0]); // primer elemento: 8
console.log(notas.length); // cantidad de elementos: 5
console.log(notas[notas.length - 1]); // último elemento: 7

// push añade al final; pop quita y devuelve el último elemento.
notas.push(10);
notas.pop();

// Bucle por posiciones (índices):
for (let i = 0; i < notas.length; i++) {
  console.log(i, notas[i]);
}

// Bucle por valores, cuando no necesito la posición:
for (const nota of notas) {
  console.log(nota);
}

// ============================================================
// 5. MÉTODOS DE ARRAYS
// ============================================================

const precios = [12.5, 30, 8, 45.9, 19.99];

// map: transforma cada elemento; devuelve un array nuevo.
const preciosConIVA = precios.map((precio) => precio * 1.21);

// También se puede pasar una función ya declarada, SIN paréntesis.
const aplicarIVA = (precio) => precio * 1.21;
const preciosConIVA2 = precios.map(aplicarIVA);

// filter: devuelve un array nuevo con los elementos que cumplen.
const preciosMayores20 = precios.filter((precio) => precio > 20);

// Ejemplo parecido al ejercicio: IVA, filtrar los que superan 20 €,
// y redondear a dos decimales manteniendo los resultados como números.
const preciosAltosConIVA = precios
  .map((precio) => precio * 1.21)
  .filter((precio) => precio > 20)
  .map((precio) => Number(precio.toFixed(2)));

console.log("Precios altos con IVA:", preciosAltosConIVA);

// reduce: acumula muchos elementos en un resultado. El 0 es el valor inicial.
const totalPrecios = precios.reduce(
  (acumulado, precio) => acumulado + precio,
  0,
);

// find: primer elemento que cumple; devuelve undefined si no encuentra.
const primerPrecioAlto = precios.find((precio) => precio > 20);

// findIndex: posición del primer elemento que cumple; -1 si no encuentra.
const posicionPrimerPrecioAlto = precios.findIndex((precio) => precio > 20);

// some: true si al menos uno cumple.
const hayPrecioMayor40 = precios.some((precio) => precio > 40);

// every: true si todos cumplen.
const todosSonPositivos = precios.every((precio) => precio > 0);

// sort: ordena el propio array. Para números, usar comparador.
const numeros = [12, 3, 25, 8];
const numerosAscendente = [...numeros].sort((a, b) => a - b);
const numerosDescendente = [...numeros].sort((a, b) => b - a);
// Se usa [...numeros] para ordenar una copia y conservar el original.

// Resumen rápido:
// map      -> transformar cada elemento
// filter   -> quedarse con los que cumplen
// reduce   -> acumular/sumar
// find     -> primer elemento que cumple
// findIndex-> posición del primero que cumple
// some     -> ¿hay alguno que cumpla?
// every    -> ¿cumplen todos?
// sort     -> ordenar (modifica el array sobre el que se llama)

// ============================================================
// 6. DESESTRUCTURACIÓN Y SPREAD
// ============================================================

const clasificacion = ["Marta", "Ana", "Luis"];
const [oro, plata, bronce] = clasificacion;
const [primera, , tercera] = clasificacion; // salta la segunda posición
const [ganadora, ...restoClasificacion] = clasificacion;

// Spread copia o combina arrays.
const cestaMarta = [12.5, 30, 8];
const cestaAna = [45.9, 19.99];
const copiaCesta = [...cestaMarta];
const todasLasCompras = [...cestaMarta, ...cestaAna];

// Desestructurar objeto: se extraen propiedades por su nombre.
const libro = { titulo: "Libro", autor: "Autora", anio: 2026 };
const { titulo, autor } = libro;

// ============================================================
// 7. OBJETOS Y ARRAYS DE OBJETOS
// ============================================================

const gruposEjemplo = [
  { nombre: "Nébula", genero: "electrónica", minutos: 90 },
  { nombre: "Tardeo Club", genero: "pop", minutos: 40 },
  { nombre: "Luz", genero: "rock", minutos: 65 },
];

const nombresGrupos = gruposEjemplo.map((grupo) => grupo.nombre);
const gruposLargos = gruposEjemplo.filter((grupo) => grupo.minutos > 60);
const primerGrupoLargo = gruposEjemplo.find((grupo) => grupo.minutos > 60);
const totalMinutosEjemplo = gruposEjemplo.reduce(
  (total, grupo) => total + grupo.minutos,
  0,
);
const hayGrupoLargo = gruposEjemplo.some((grupo) => grupo.minutos > 60);
const todosMasMediaHora = gruposEjemplo.every((grupo) => grupo.minutos > 30);

// ============================================================
// 8. CLASE GRUPO: ATRIBUTOS PRIVADOS Y MÉTODOS
// ============================================================

class Grupo {
  #nombre;
  #genero;
  #minutos;

  constructor(nombre, genero, minutos) {
    this.#nombre = nombre;
    this.#genero = genero;
    this.#minutos = minutos;
  }

  nombre() {
    return this.#nombre;
  }

  minutos() {
    return this.#minutos;
  }

  esLargo() {
    return this.#minutos > 60;
  }

  ficha() {
    return `${this.#nombre} · ${this.#genero} · ${this.#minutos} minutos`;
  }
}

const grupoNebula = new Grupo("Nébula", "electrónica", 90);
console.log(grupoNebula.ficha());
console.log(grupoNebula.esLargo()); // true

// Los atributos privados #nombre, #genero y #minutos no se consultan
// desde fuera directamente. Se usan los métodos públicos nombre(), minutos().

// ============================================================
// 9. CLASE FESTIVAL: ARRAY PRIVADO Y COMPROBACIÓN DE DUPLICADOS
// ============================================================

class Festival {
  #nombre;
  #cartel;

  constructor(nombre) {
    this.#nombre = nombre;
    this.#cartel = []; // empieza vacío
  }

  anadirGrupo(grupo) {
    // some devuelve true si ya existe un grupo con ese nombre.
    const existe = this.#cartel.some(
      (grupoActual) => grupoActual.nombre() === grupo.nombre(),
    );

    if (existe) {
      return false; // no se añade si el nombre está repetido
    }

    this.#cartel.push(grupo);
    return true; // se ha añadido correctamente
  }

  cuantos() {
    return this.#cartel.length;
  }

  cartel() {
    // Devuelve una copia del array para proteger el array interno.
    return [...this.#cartel];
  }

  resumen() {
    return `${this.#nombre}: ${this.#cartel.length} grupos`;
  }
}

const festivalEjemplo = new Festival("Sonidos del Sur");
festivalEjemplo.anadirGrupo(new Grupo("Nébula", "electrónica", 90));
festivalEjemplo.anadirGrupo(new Grupo("Tardeo Club", "pop", 40));
console.log(festivalEjemplo.resumen());

// ============================================================
// 10. INFORME DEL FESTIVAL: PATRONES PARA EL EXAMEN
// ============================================================

const cartel = festivalEjemplo.cartel();

// Tabla con nombre y duración.
console.table(
  cartel.map((grupo) => ({
    nombre: grupo.nombre(),
    minutos: grupo.minutos(),
  })),
);

// Cuántos grupos superan 60 minutos.
const cantidadLargas = cartel.filter((grupo) => grupo.minutos() > 60).length;

// Lista de nombres.
const listaNombres = cartel.map((grupo) => grupo.nombre());

// Primera actuación que supera 60 minutos.
const primeraLarga = cartel.find((grupo) => grupo.minutos() > 60);

// Suma de todos los minutos.
const duracionTotal = cartel.reduce(
  (total, grupo) => total + grupo.minutos(),
  0,
);

// Dos actuaciones más largas, sin cambiar el orden del cartel original.
// Primero copiamos, luego ordenamos de mayor a menor y desestructuramos.
const [masLarga, segundaMasLarga] = [...cartel].sort(
  (a, b) => b.minutos() - a.minutos(),
);

const todasSuperanMediaHora = cartel.every((grupo) => grupo.minutos() > 30);

console.log("Cantidad largas:", cantidadLargas);
console.log("Nombres:", listaNombres);
console.log("Primera larga:", primeraLarga ? primeraLarga.ficha() : "No hay");
console.log("Duración total:", duracionTotal);
console.log("Más larga:", masLarga ? masLarga.ficha() : "No hay grupos");
console.log(
  "Segunda más larga:",
  segundaMasLarga ? segundaMasLarga.ficha() : "No hay segunda actuación",
);
console.log("Todas superan media hora:", todasSuperanMediaHora);

// Agrupar resultados en consola:
console.group("Informe del festival");
console.log("Grupos:", cartel.length);
console.log("Nombres:", listaNombres);
console.groupEnd();

// ============================================================
// 11. JSON: OBJETO -> TEXTO -> OBJETO
// ============================================================

const datos = { nombre: "Nébula", minutos: 90 };
const textoJSON = JSON.stringify(datos); // convierte a texto JSON
console.log(typeof textoJSON); // "string"

const datosRecuperados = JSON.parse(textoJSON); // texto JSON a objeto
console.log(datosRecuperados.nombre); // "Nébula"
console.log(datosRecuperados === datos); // false: es otro objeto

// JSON guarda datos, no métodos. Los métodos de una clase no se recuperan
// automáticamente al hacer JSON.parse: el resultado no recupera la clase.

// ============================================================
// 12. MÓDULOS: EJEMPLO DE SINTAXIS (PARA ARCHIVOS SEPARADOS)
// ============================================================

// En Grupo.js:
// export class Grupo { ... }

// En Festival.js:
// import { Grupo } from "./Grupo.js";
// export class Festival { ... }

// En index.js:
// import { Grupo } from "./Grupo.js";
// import { Festival } from "./Festival.js";

// En index.html:
// <script type="module" src="./index.js"></script>

// ============================================================
// 13. ERRORES TÍPICOS: RECORDATORIO
// ============================================================

// 1) "40" + 5 da "405". Usa Number("40") + 5.
// 2) toFixed(2) devuelve string; Number(valor.toFixed(2)) vuelve a number.
// 3) map transforma; filter selecciona; find devuelve solo el primero.
// 4) reduce necesita acumulador inicial en el caso de sumas: reduce(..., 0).
// 5) sort modifica el array; usa [...array].sort(...) para ordenar una copia.
// 6) En una flecha con llaves, escribe return para devolver el resultado.
// 7) Para evitar duplicados, comprueba con some antes de push.
// 8) Los atributos privados se consultan con métodos públicos.
// 9) JSON.stringify = objeto a texto; JSON.parse = texto a objeto.
// 10) Si find no encuentra nada, devuelve undefined: compruébalo antes de usar un método.

// Para ver un ejemplo concreto en consola, escribe por ejemplo:
// console.log(preciosAltosConIVA);
// console.log(festivalEjemplo.resumen());
// console.log(listaNombres);
