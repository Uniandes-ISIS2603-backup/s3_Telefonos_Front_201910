import { Component, OnInit } from '@angular/core';

import { Comprador } from '../comprador';
import { CompradorService } from '../comprador.service';
import { CompradorDetail } from '../comprador-detail';

/**
 * El componente para listar compradores en CambiaPhone
 */
@Component({
  selector: 'app-comprador-list',
  templateUrl: './comprador-list.component.html',
  styleUrls: ['./comprador-list.component.css']
})
export class CompradorListComponent implements OnInit {

  /**
    * Constructor para el componente
    * @param compradorService El proveedor del servicio Comprador 
    */
  constructor(private compradorService: CompradorService) { }

    /**
    * La lista de compradores que pertenecen a CambiaPhone
    */
    compradores: Comprador[];

    /**
    * Muestra o esconde comprador-create-component 
    */
   showCreate: boolean;

    /**
     * El identificador del comprador seleccionado
     */
    comprador_id: number;

    /**
     * El comprador seleccionado
     */
    selectedComprador : Comprador; 
    
    /**
     * Indica cual es el comprador seleccionado
     * @param comprador_id Identificador del comprador seleccionado
     */
    onSelected(comprador_id: number):void {
      this.comprador_id = comprador_id;
      this.selectedComprador = new CompradorDetail();
      this.getCompradorDetail();
    }

    /**
    * Muetsra o esconde el componente de crear
    */
   showHideCreate(): void {
    if (this.selectedComprador) {
        this.selectedComprador = undefined;
        this.comprador_id = undefined;
    }
    this.showCreate = !this.showCreate;
}

  /**
    * Llama el servicio para actualizar la lista de compradores
    */
   getCompradores(): void {
    this.compradorService.getCompradores()
        .subscribe(theCompradores => {
            this.compradores = theCompradores;
        });
}

/**
 * Llama el servicio para obtener el detalle del comprador seleccionado
 */
getCompradorDetail(): void {
  this.compradorService.getCompradorDetail(this.comprador_id)
      .subscribe(selectedComprador => {
          this.selectedComprador = selectedComprador;
          console.log(this.selectedComprador);
          
      });
}

/**
    * Este metodo va a inicializar el componente obteniendo la lista de compradores del servicio
    * Este metodo va a ser llamado cuando el componente sea creado
    */
  ngOnInit() {
    this.showCreate = false;
    this.selectedComprador = undefined;
    this.comprador_id = undefined;
    this.getCompradores();
  }

}
