import { Factura } from "../factura/factura";
import { Proveedor } from "./proveedor";
import { Seguro } from "../seguro/seguro";

export class ProveedorDetail extends Proveedor{

    /**
     * Facturas asociadas al proveedor
     */
    facturasDeVentas: Factura[];

    /**
     * Seguros asociados al proveedor
     */
    seguros: Seguro[];
}
