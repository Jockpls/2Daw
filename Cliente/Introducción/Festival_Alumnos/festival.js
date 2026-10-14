export class Festival{
    #nombre;
    #cartel = []; //Contendrá grupos

    constructor(nombre){
        this.#nombre = nombre;
    }

    addGrupo(grupo){
        const repetido = this.#cartel.some(g => g.nombre() === grupo.nombre());
        
        if (repetido){
        return false; 
        }
        this.#cartel.push(grupo);
        return true;
    }

    cuantos(){
        return this.#cartel.length;
    }

    cartel(){
        //return this.#cartel.map(banda => banda);
        return [...this.#cartel]; //ambos son correctos
    }

    resumen(){
        return `${this.#nombre} - ${this.cuantos()} grupos en el cartel.`;
    }
}