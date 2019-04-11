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
    imei: number;

     /**
     * La referencia del celular
     */
    referencia: string;

    /**
     * El celular se encuentra registrada
     */
    registrado: boolean;

    /**
     * Constructor default del celular
     * @param marca, marca del celular
     * @param modelo, modelo del celular
     * @param referencia, referencia del celular
     * @param registrado, si el celular se encuentra registrado o no
     * @param imei, el imei del celular 
     */
    constructor(marca: string, modelo: string, referencia: string, registrado: boolean, imei:number){
        this.marca = marca;
        this.modelo = modelo;
        this.imei = imei;
        this.referencia = referencia;
        this.registrado = registrado;
    }

}