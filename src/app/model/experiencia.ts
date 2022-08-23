export class Experiencia {
    id? : number;
    fecha: string;
    curso: string;

    constructor(fecha: string, curso: string){
        this.fecha = fecha;
        this.curso = curso;
    }
}
