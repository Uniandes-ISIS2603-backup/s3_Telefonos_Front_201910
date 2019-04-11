import { CarritoDeCompras } from "./carritoDeCompras";
import { Publicacion } from "../publicacion/publicacion";

export class CarritoDeComprasDetail extends CarritoDeCompras{

    /**
     * Publicaciones que pertenecen al carrito de compras
     */
   publicaciones: Publicacion[];

}