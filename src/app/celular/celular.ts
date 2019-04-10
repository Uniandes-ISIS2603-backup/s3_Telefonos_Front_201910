export class Celular {

    /**
     * La marca del celular
     */
    marca: string;

     /**
      * El modelo del celular
      */
    modelo: string;

    /**
     * El IMEI del celular
     */
    imei: string;

     /**
     * La referencia del celular
     */
    referencia: string;

    /**
     * El celular se encuentra registrada
     */
    registrado: boolean;

    constructor(marca: string, modelo: string, referencia: string, registrado: boolean, imei:string){
        this.marca = marca;
        this.modelo = modelo;
        this.imei = imei;
        this.referencia = referencia;
        this.registrado = registrado;
    }

}