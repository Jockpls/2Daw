const libros = [
  { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", disponible: true },
  { titulo: "El Quijote", autor: "Miguel de Cervantes", disponible: false },
  { titulo: "Rayuela", autor: "Julio Cortázar", disponible: true },
  { titulo: "Pedro Páramo", autor: "Juan Rulfo", disponible: false },
];

const catalogo = document.querySelector("#catalogo");
const resumen = document.querySelector("#resumen");

const disponibles = libros.filter(l => l.disponible);

if (disponibles.length > 0){//ya se que hay libros disponibles
    resumen.textContent = ` ${disponibles.length} libros disponibles de ${libros.length}`;
}

for (const d of disponibles){
    const item = document.createElement("li");
    item.textContent = `${d.titulo} - ${d.autor} - ${d.disponible}`;
    catalogo.append(item);
}
