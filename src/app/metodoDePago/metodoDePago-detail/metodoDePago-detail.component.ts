import { Component, OnInit, Input } from '@angular/core';
import { MetodoDePago } from '../metodoDePago';
import { ActivatedRoute } from '@angular/router';
import { MetodoDePagoService } from '../metodoDePago.service';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class MetodoDePagoDetailComponent implements OnInit {

  /**
    * el metodo de ágp seleccionado en la lista
    */
   @Input() metodoDePagoDetail: MetodoDePago;
   
  /**
    * El constructor del componente
    * @param route Activador de las rutas
    * @param metodoDePagoService Servicio del metodo de pago para desplegar el detail
    */
   constructor(
    private route: ActivatedRoute,
    private metodoDePagoService: MetodoDePagoService
  ) { }

  /**
    * El id del  metodo de pago que viene en el path get .../metodosDePago/metodoDePago_id
    */
   metodoDePago_id: number;

    /**
    * El metodo que obtiene  el metodo de pago de la que queremos ver el detalle
    */
   getMetodoDePagoDetail(): void {
    this.metodoDePagoService.getMetodoDePagoDetail(this.metodoDePago_id)
        .subscribe(metodoDePagoDetail => {
            this.metodoDePagoDetail = metodoDePagoDetail
        });
}

  /**
    * El metodo que inicializa el componente
    * Necesitamos crear el metodo de pago para que nunca este indefinido
    */
   ngOnInit() {
    this.metodoDePago_id = +this.route.snapshot.paramMap.get('id');
    if (this.metodoDePago_id){
    this.metodoDePagoDetail = new MetodoDePago();
    this.getMetodoDePagoDetail();
    }
}

}
