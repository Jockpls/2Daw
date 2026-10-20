export class Festival{
    #nombre;
    #cartel = [];

    constructor(nombre){
        this.#nombre = nombre;
    }
    
    annadirGrupo(grupoAnnaddir){
        const repetido = this.#cartel.some(g => g.nombre() === grupoAnnaddir.nombre());
        if (repetido) {
            return false;
        } else {
            this.#cartel.push(grupoAnnaddir);
            return true;
        }
        
    }

    cuantos(){
        return this.#cartel.length;
    }

    cartel(){
        return [...this.#cartel];
    }

    resumen(){
        return `${this.#nombre} - ${this.cuantos()} grupos en el cartel` 
    }

}