import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { Publicacion } from '../publicacion';
import { PublicacionService } from '../publicacion.service';
import { PublicacionDetail } from '../publicacion-detail';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

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
    * @param publicacionService El proveedor del servicio publicacion
    */
  constructor(private publicacionService: PublicacionService,
    private viewRef: ViewContainerRef,
    private modalDialogService:ModalDialogService,
    private toastrService: ToastrService) { }

    /**
    * La lista de publicacion que pertenecen a CambiaPhone
    */
    publicaciones: Publicacion[];

    /**
    * Muestra o esconde publicacion-create-component 
    */
   showCreate: boolean;

    /**
     * El identificador de la publicacion seleccionada
     */
    publicacion_id: number;

    /**
     * El comprador seleccionado
     */
    selectedPublicacion : Publicacion; 
    
    /**
     * Indica cual es la publicación seleccionada
     * @param publicacion_id Identificador de la publicacion seleccionada
     */
    onSelected(publicacion_id: number):void {
      this.publicacion_id = publicacion_id;
      this.selectedPublicacion = new PublicacionDetail();
      this.getPublicacionDetail();
    }

    /**
    * Muetsra o esconde el componente de crear
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
 * Llama el servicio para obtener el detalle de la publicacion seleccionada
 */
getPublicacionDetail(): void {
  this.publicacionService.getPublicacionDetail(this.publicacion_id)
      .subscribe(selectedPublicacion => {
          this.selectedPublicacion = selectedPublicacion;
          console.log(this.selectedPublicacion);
          
      });
}

  

/**
    * Este metodo va a inicializar el componente obteniendo la lista de compradores del servicio
    * Este metodo va a ser llamado cuando el componente sea creado
    */
  ngOnInit() {
    this.showCreate = false;
    this.selectedPublicacion = undefined;
    this.publicacion_id = undefined;
    this.getPublicaciones();
  }

}
