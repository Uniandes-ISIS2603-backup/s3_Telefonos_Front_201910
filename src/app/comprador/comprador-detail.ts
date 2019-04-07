import { Factura } from "../factura/factura";

import { Comprador } from "./comprador";


export class CompradorDetail extends Comprador {
    /** Las facturas del comprador **/
    facturas : Factura[];
}
