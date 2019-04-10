import { Component, OnInit } from '@angular/core';

import { Publicacion } from '../publicacion';
import { PublicacionService } from '../publicacion.service';
import { PublicacionDetail } from '../publicacion-detail';

/**
 * El componente para listar publicaciones en CambiaPhone
 */
@Component({
  selector: 'app-publicacion-list',
  templateUrl: './publicacion-list.component.html',
  styleUrls: ['./publicacion-list.component.css']
})
export class PublicacionListComponent implements OnInit {

  /**
    * Constructor para el componente
    * @param publicacionService El proveedor del servicio Publicacion
    */
  constructor(private publicacionService: PublicacionService) { }

    /**
    * La lista de publicaciones que pertenecen a CambiaPhone
    */
    publicaciones: Publicacion[];

    /**
    * Shows or hides the author-create-component
    */
   showCreate: boolean;

    /**
     * El identificador del publicacion seleccionado
     */
    publicacion_id: number;

    /**
     * El publicacion seleccionado
     */
    selectedPublicacion : Publicacion; 
    
    /**
     * Indica cual es el publicacion seleccionado
     * @param publicacion_id Identificador del publicacion seleccionado
     */
    onSelected(publicacion_id: number):void {
      this.publicacion_id = publicacion_id;
      this.selectedPublicacion = new PublicacionDetail();
      this.getPublicacionDetail();
    }

    /**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    if (this.selectedPublicacion) {
        this.selectedPublicacion = undefined;
        this.publicacion_id = undefined;
    }
    this.showCreate = !this.showCreate;
}

  /**
    * Llama el servicio para actualizar la lista de publicaciones
    */
   getPublicaciones(): void {
    this.publicacionService.getPublicaciones()
        .subscribe(thePublicaciones => {
            this.publicaciones = thePublicaciones;
        });
}

/**
 * Llama el servicio para obtener el detalle de la publicacion seleccionado
 */
getPublicacionDetail(): void {
  this.publicacionService.getPublicacionDetail(this.publicacion_id)
      .subscribe(selectedPublicacion => {
          this.selectedPublicacion = selectedPublicacion;
          console.log(this.selectedPublicacion);
          
      });
}

/**
    * Este metodo va a inicializar el componente obteniendo la lista de publicaciones del servicio
    * Este metodo va a ser llamado cuando el componente sea creado
    */
  ngOnInit() {
    this.showCreate = false;
    this.selectedPublicacion = undefined;
    this.publicacion_id = undefined;
    this.getPublicaciones();
  }

}
