import { Comprador } from "../comprador/comprador";
import { Proveedor } from "../proveeedor/proveedor";

/**
 * Esta clase representa una factura de CambiaPhone. 
 * Contiene toda la informacion relevante de una factura.
 */
export class Factura {

    /**
     * Fecha de creacion de la factura
     */
    fecha: any;

    /**
     * Identificador de la factura
     */
    id: number;

    /**
     * Referencia de la factura
     */
    referencia:String;

    /**
     * Comprador asociado a la factura
     */
    comprador: Comprador;

    /**
     * Proveedor asociado a la factura
     */
    proveedor: Proveedor;

    /**
     * Publicación asociada a la factura
     */
    publicacion: String; 
    
}
