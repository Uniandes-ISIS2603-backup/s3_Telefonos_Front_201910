

import { Publicacion } from "./publicacion";
import { Celular } from "../celular/celular";
import { Tablet } from "../tablet/tablet";


export class PublicacionDetail extends Publicacion {
   
    /**
     * Celular asociado a la publicacion
     */
    celular: Celular[];
    /**
     * tablet asociada a la publicacion
     */
    tablet: Tablet[];  
   
}
