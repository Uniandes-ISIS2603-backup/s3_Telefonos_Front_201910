import { Factura } from "../factura/factura";
import { Proveedor } from "./proveedor";

export class ProveedorDetail extends Proveedor{

    /**
     * Facturas asociadas al proveedor
     */
    facturasDeVentas: Factura[];
}
