const kilometros = [12, 5, 18, 7, 3];

//1
//El dato de una sexta participante llega de un formulario, así que llega como cadena: const
//kmDeNuria = "9";. Conseguir que al sumarle 1 dé diez.

const kmDeNuria = "9";

kilometros.push(Number(kmDeNuria)+1);

console.log("Variable con Nueria", kilometros);


//2
//Obtener un array nuevo con cada distancia aumentada en 2, y comprobar qué ha pasado con
//kilometros.

const NewKM = kilometros.map((km) => km +2);

console.log("KM después de sumar 2", NewKM);
console.log("Estado de kilometros original", kilometros);

//3
//Obtener un array con las distancias que superan los 6 km.

const Masde6 = [];

for (let i = 0; i < kilometros.length; i++){
    if (kilometros[i] > 6){
        Masde6.push(kilometros[i]);
    };
}

console.log("Más de 6km", Masde6);

//4
//Obtener un array con las distancias que superan los 6 km, aumentadas en 2, encadenando los
//dos métodos. Y averiguar si da lo mismo cambiando el orden de los eslabones.

const UnionArrays = kilometros.map((km) => km +2)
.filter((km) => km > 6);

const UnionArrays2 = kilometros.map((km) => km +2)
.filter((km) => km > 6);

console.log("Array suma y filtra", UnionArrays);
console.log("Array filtra y suma", UnionArrays2);


//5
//Obtener el total de kilómetros del grupo, primero con un bucle y después con reduce.

let contador = 0;

for (let i = 0; i < kilometros.length; i++) {
    contador += kilometros[i];
}

console.log("Primer contador con for", contador);

const contadorReduce = kilometros.reduce((acumulado, km) => acumulado + km, 0);

console.log("Contador con Reduce", contadorReduce);


//6
//Obtener el total de las distancias que superan los 6 km.

let cont = 0;
    for (let i = 0; i < kilometros.length; i++){
        if (kilometros[i] > 6 ) {
            cont += kilometros[i]        
        }
    }
console.log("La suma total de los kilometros es", cont);
