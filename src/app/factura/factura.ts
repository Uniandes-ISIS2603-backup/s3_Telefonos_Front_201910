import { Comprador } from "../comprador/comprador";
import { Proveedor } from "../proveeedor/proveedor";

export class Factura {
    /**
     * La referencia de la factura
     */
    referencia: String;

    /**
     * La fecha de creacion de la factura
     */
    fecha:any;

    /**
     * Comprador asociado
     */
    comprador:Comprador;

    /**
     * Proveedor asociado
     */
    proveedor:Proveedor;

    /**
     * Identificador publicacion
     */
    publicacion:String;
}
