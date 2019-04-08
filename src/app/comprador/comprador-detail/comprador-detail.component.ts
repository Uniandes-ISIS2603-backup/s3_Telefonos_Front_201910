import { Component, OnInit, Input } from '@angular/core';
import { CompradorDetail } from '../comprador-detail';
import { CompradorService } from '../comprador.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comprador-detail',
  templateUrl: './comprador-detail.component.html',
  styleUrls: ['./comprador-detail.component.css']
})
export class CompradorDetailComponent implements OnInit {

  /**
    * El comprador seleccionado en la lista
    */
   @Input() compradorDetail: CompradorDetail;

   /**
    * El constructor del componente
    * @param route Activador de las rutas
    * @param compradorService Servicio del comprador para desplegar el detail
    */
  constructor(
    private route: ActivatedRoute,
    private compradorService: CompradorService
  ) { }

  /**
    * El id del comprador que viene en el path get .../compradores/comprador_id
    */
   comprador_id: number;

    /**
    * El metodo que obtiene el comprador del que queremos ver el detalle
    */
   getCompradorDetail(): void {
    this.compradorService.getCompradorDetail(this.comprador_id)
        .subscribe(compradorDetail => {
            this.compradorDetail = compradorDetail
        });
}

  /**
    * El metodo que inicializa el componente
    * Necesitamos crear el comprador para que nunca este indefinido
    */
   ngOnInit() {
    this.comprador_id = +this.route.snapshot.paramMap.get('id');
    if (this.comprador_id){
    this.compradorDetail = new CompradorDetail();
    this.getCompradorDetail();
    }
}

}
