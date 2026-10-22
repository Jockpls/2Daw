//Tenemos un objeto tipo windws que lo contiene todo.


console.log("Que es windows?", typeof window);

console.log("window.console === console: ", window.console === console);

//Location, dónde está la página
console.log("Dirección completa: ", location.href);
console.log("Protocolo", location.protocol);

//Navegador y al tamaño de ventana
console.log("Idioma", navigator.language);
console.log("Hay conexión??", navigator.onLine);

console.log("Tamaño de ventana:", window.innerHeight," x ", window.innerWidth);

//Document, que es la página convertida en objetos
console.log("Título: ", document.title)

//Todo el arbol de elementos cuelga del body

//cuantos hijos tiene un elemento
console.log(document.body.children);
console.log("¿Cuantos hijos tiene body?: ", document.body.children.length);


console.log("Vamos a eliminar un elemento")
//objeto.remove

