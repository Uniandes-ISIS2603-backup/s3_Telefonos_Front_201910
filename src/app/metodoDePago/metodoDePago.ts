
/**
 * Esta clase representa una factura de CambiaPhone. 
 * Contiene toda la informacion relevante de una factura.
 */
export class MetodoDePago {

    /**
     * nombre del método de pago
     */
    nombre: String;

    /**
     * Nombre del banco 
     */
    banco: String;

    /**
     * Tipo de metodo de pago
     */
    tipo: String;

    /**
     * fecha de vencimiento del metodo de pago
     */
    fecha: any;

    /**
     * verificacion del metodo de pago
     */
    codigoVerificacion: number;

    /**
     * identificador del metodo de pago
     */
    id: Number; 
    
}
