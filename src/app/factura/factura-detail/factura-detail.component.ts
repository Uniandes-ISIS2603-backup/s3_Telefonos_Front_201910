import { Component, OnInit, Input } from '@angular/core';
import { Factura } from '../factura';
import { ActivatedRoute } from '@angular/router';
import { FacturaService } from '../factura.service';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {

  /**
    * La factura seleccionada en la lista
    */
   @Input() facturaDetail: Factura;
   
  /**
    * El constructor del componente
    * @param route Activador de las rutas
    * @param compradorService Servicio de la factura para desplegar el detail
    */
   constructor(
    private route: ActivatedRoute,
    private facturaService: FacturaService
  ) { }

  /**
    * El id de la factura que viene en el path get .../facturas/factura_id
    */
   factura_id: number;

    /**
    * El metodo que obtiene  la factura de la que queremos ver el detalle
    */
   getFacturaDetail(): void {
    this.facturaService.getFacturaDetail(this.factura_id)
        .subscribe(facturaDetail => {
            this.facturaDetail = facturaDetail
        });
}

  /**
    * El metodo que inicializa el componente
    * Necesitamos crear la factura para que nunca este indefinido
    */
   ngOnInit() {
    this.factura_id = +this.route.snapshot.paramMap.get('id');
    if (this.factura_id){
    this.facturaDetail = new Factura();
    this.getFacturaDetail();
    }
}

}
