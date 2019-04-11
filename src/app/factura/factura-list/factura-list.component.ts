import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../factura.service';
import { Factura } from '../factura';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

  /**
    * Constructor para el componente
    * @param facturaService El proveedor del servicio Factura
    */
  constructor( private facturaService: FacturaService) { }

  /**
    * La lista de facturas que pertenecen a CambiaPhone
    */
   facturas: Factura[];

    /**
     * El identificador de la factura seleccionada
     */
    factura_id: number;

    /**
     * La factura seleccionada
     */
    selectedFactura : Factura;

    /**
    * Muestra o esconde factura-create-component 
    */
   showCreate: boolean;

    /**
     * Indica cual es la factura seleccionada
     * @param factura_id Identificador de la factura seleccionada
     */
    onSelected(factura_id: number):void {
      this.factura_id = factura_id;
      this.selectedFactura = new Factura();
      this.getFacturaDetail();
    }

    /**
    * Muetsra o esconde el componente de crear
    */
   showHideCreate(): void {
    if (this.selectedFactura) {
        this.selectedFactura = undefined;
        this.factura_id = undefined;
    }
    this.showCreate = !this.showCreate;
}

    /**
    * Llama el servicio para actualizar la lista de facturas
    */
   getFacturas(): void {
    this.facturaService.getFacturas()
        .subscribe(theFacturas => {
            this.facturas = theFacturas;
        });
}

/**
 * Llama el servicio para obtener el detalle de la factura seleccionada
 */
getFacturaDetail(): void {
  this.facturaService.getFacturaDetail(this.factura_id)
      .subscribe(selectedFactura => {
          this.selectedFactura = selectedFactura;
          console.log(this.selectedFactura);
          
      });
}

/**
    * Este metodo va a inicializar el componente obteniendo la lista de facturas del servicio
    * Este metodo va a ser llamado cuando el componente sea creado
    */
   ngOnInit() {
    this.showCreate = false;
    this.selectedFactura = undefined;
    this.factura_id = undefined;
    this.getFacturas();
  }

}
