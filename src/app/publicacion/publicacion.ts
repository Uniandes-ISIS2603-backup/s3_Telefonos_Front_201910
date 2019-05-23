import { Celular } from "../celular/celular";
import { Tablet } from "../tablet/tablet";

/**
 * Esta clase representa una publicacion de CambiaPhone. 
 * Contiene toda la informacion relevante de una publicacion.
 */

    export class Publicacion {

        /**
        * fecha de creacion del la publicacion
        */
       fechaPublicacion: any;
    
        /**
        * array con el conjunto de imagenes de la publicaciÃ³n
        */
       imagenes: string[];
       
       /**
        * El id de la publicacion
        */
       id: number;
    
       /**
        * El precio de la publicacion
        */
       precio: number;

       celular: Celular;

       tablet: Tablet;
    
    }
    