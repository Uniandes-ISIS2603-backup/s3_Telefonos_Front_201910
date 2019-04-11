import { Component, OnInit, Input } from '@angular/core';
import { PublicacionDetail } from '../publicacion-detail';
import { PublicacionService } from '../publicacion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion-detail',
  templateUrl: './publicacion-detail.component.html',
  styleUrls: ['./publicacion-detail.component.css']
})
export class PublicacionDetailComponent implements OnInit {

  /**
    * La publicacion seleccionada en la lista
    */
   @Input() publicacionDetail: PublicacionDetail;

   /**
    * El constructor del componente
    * @param route Activador de las rutas
    * @param publicacionService Servicio de la publicacion para desplegar el detail
    */
  constructor(
    private route: ActivatedRoute,
    private publicacionService: PublicacionService
  ) { }

  /**
    * El id de la publicaciones que viene en el path get .../publicaciones/publicacion_id
    */
   publicacion_id: number;

    /**
    * El metodo que obtiene la publicacion de la que queremos ver el detalle
    */
   getPublicacionDetail(): void {
    this.publicacionService.getPublicacionDetail(this.publicacion_id)
        .subscribe(publicacionDetail => {
            this.publicacionDetail = publicacionDetail
        });
}

  /**
    * El metodo que inicializa el componente
    * Necesitamos crear la publicacion para que nunca este indefinido
    */
   ngOnInit() {
    this.publicacion_id = +this.route.snapshot.paramMap.get('id');
    if (this.publicacion_id){
    this.publicacionDetail = new PublicacionDetail();
    this.getPublicacionDetail();
    }
}

}
