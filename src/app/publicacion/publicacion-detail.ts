

import { Publicacion } from "./publicacion";
import { Factura } from "../factura/factura";


export class PublicacionDetail extends Publicacion {
    /**
     * Facturas asociadas al comprador
   */
    facturasDeCompra: Factura[];
  
}
