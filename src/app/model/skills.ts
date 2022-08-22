export class Skills {
    id? : number;
    porcentaje: number;
    texto: string;

    constructor(porcentaje: number, texto: string){
        this.porcentaje = porcentaje;
        this.texto = texto;
    }

}
