import { Proveedor } from "../proveeedor/proveedor";

/**
 * Esta clase representa una factura de CambiaPhone. 
 * Contiene toda la informacion relevante de una factura.
 */
export class Seguro {

    /**
     * Identificador del seguro
     */
    id: number;

      /**
     * Monto del seguro
     */
    monto: number;

     /**
     * Aseguradora del seguro
     */
    aseguradora:String;

    /**
     * Proveedor asociado al seguro
     */
    proveedor: Proveedor;
}
