import { Component, OnInit } from '@angular/core';
import { MetodoDePagoService } from '../metodoDePago.service';
import { MetodoDePago } from '../metodoDePago';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class MetodoDePagoListComponent implements OnInit {

  /**
    * Constructor para el componente
    * @param metodoDePagoService El proveedor del servicio Factura
    */
  constructor( private metodoDePagoService: MetodoDePagoService) { }

  /**
    * La lista de facturas que pertenecen a CambiaPhone
    */
   metodosDePago: MetodoDePago[];

    /**
     * El identificador de la factura seleccionada
     */
    metodoDePago_id: number;

    /**
     * el metodo de pago seleccionada
     */
    selectedMetodoDePago : MetodoDePago;

    /**
    * Muestra o esconde metodoDePago-create-component 
    */
   showCreate: boolean;

    /**
     * Indica cual es el metodo de pago seleccionada
     * @param metodoDePago_id Identificador del metodoDePago seleccionado
     */
    onSelected(metodoDePago_id: number):void {
      this.metodoDePago_id = metodoDePago_id;
      this.selectedMetodoDePago = new MetodoDePago();
      this.getMetodoDePagoDetail();
    }

    /**
    * Muetsra o esconde el componente de crear
    */
   showHideCreate(): void {
    if (this.selectedMetodoDePago) {
        this.selectedMetodoDePago = undefined;
        this.metodoDePago_id = undefined;
    }
    this.showCreate = !this.showCreate;
}

    /**
    * Llama el servicio para actualizar la lista de metodos de pago
    */
   getMetodosDePago(): void {
    this.metodoDePagoService.getMetodosDePago()
        .subscribe(theMetodosDePago => {
            this.metodosDePago = theMetodosDePago;
        });
}

/**
 * Llama el servicio para obtener el detalle de la factura seleccionada
 */
getMetodoDePagoDetail(): void {
  this.metodoDePagoService.getMetodoDePagoDetail(this.metodoDePago_id)
      .subscribe(selectedMetodoDePago => {
          this.selectedMetodoDePago = selectedMetodoDePago;
          console.log(this.selectedMetodoDePago);
          
      });
}

/**
    * Este metodo va a inicializar el componente obteniendo la lista de facturas del servicio
    * Este metodo va a ser llamado cuando el componente sea creado
    */
   ngOnInit() {
    this.showCreate = false;
    this.selectedMetodoDePago = undefined;
    this.metodoDePago_id = undefined;
    this.getMetodosDePago();
  }

}
