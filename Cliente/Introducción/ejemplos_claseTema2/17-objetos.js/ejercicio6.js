/*
A partir de const alumnado = [{ nombre: "Ana", nota: 8 }, { nombre: "Luis",
nota: 4 }, { nombre: "Marta", nota: 9 }];, obtener los nombres de quienes han
aprobado y la ficha completa de la primera persona que supere el 8.
*/

const alumnado = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 4 }, 
    { nombre: "Marta", nota: 9 }
];


const aprobados = alumnado
.filter((alumnoAprobado) => alumnoAprobado.nota >= 5) 
.map((alumnoAprobado) => alumnoAprobado.nombre);

console.log(aprobados);

const primera = alumnado.find((alumno)=> alumno.nota > 8);
console.log(primera);