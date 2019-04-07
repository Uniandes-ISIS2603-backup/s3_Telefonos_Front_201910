import { Component, OnInit } from '@angular/core';

import { Comprador } from '../comprador';
import { CompradorService } from '../comprador.service';
import { CompradorDetail } from '../comprador-detail';
import { LoadedRouterConfig } from '@angular/router/src/config';

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
    comprador_id: number;
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
    * Llama el servicio para actualizar la lista de compradores
    */
   getCompradores(): void {
    this.compradorService.getCompradores()
        .subscribe(theCompradores => {
            this.compradores = theCompradores;
        });
}

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
    this.getCompradores();
  }

}
