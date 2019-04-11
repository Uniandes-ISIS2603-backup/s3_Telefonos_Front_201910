export class Tablet {

    /**
     * La marca de la tablet
     */
    marca: string;

     /**
      * El modelo de la tablet
      */
    modelo: string;

    /**
     * La referencia de la tablet
     */
    referencia: string;

    /**
     * La tablet se encuentra registrada
     */
    registrado: boolean;

    constructor(marca: string, modelo: string, referencia: string, registrado: boolean){
        this.marca = marca;
        this.modelo = modelo;
        this.referencia = referencia;
        this.registrado = registrado;
    }

}