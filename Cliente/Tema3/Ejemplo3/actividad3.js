//Marcar como prestados los titulos que tienen mas de 10 caracteres

for (const libro of document.querySelectorAll(".libro")){ //No hace falta convertirlo a array
    const titulo = libro.querySelector(".titulo").textContent;

    if (titulo.length > 10){
        libro.classList.add("prestado")
    }
}

