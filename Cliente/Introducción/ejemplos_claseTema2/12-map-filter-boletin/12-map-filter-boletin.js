const notas = [10, 3, 7, 2, 9, 5];

const subidas = notas.map((nota) => nota + 1);

const aprobadas = subidas.filter((nota) => nota >= 5);

console.log("BOLETÍN DE NOTAS");
console.log("Notas originales: ", notas.join(", "));
console.log("Notas subidas con un punto: ", subidas.join(", "));
console.log("Notas aprobadas: ", aprobadas.join(", "));

const aprobadasSubidas = notas
.filter((nota) => nota >= 5)
.map((nota) => nota < 10 ? nota + 1 : nota);

console.log(aprobadasSubidas)