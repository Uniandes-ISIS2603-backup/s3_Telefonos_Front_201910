import { Component, OnInit, Input } from '@angular/core';
import { ProveedorDetail } from '../proveedor-detail';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-detail',
  templateUrl: './proveedor-detail.component.html',
  styleUrls: ['./proveedor-detail.component.css']
})
export class ProveedorDetailComponent implements OnInit {
  /**
    * El proveedor seleccionado en la lista
    */
   @Input() proveedorDetail: ProveedorDetail;

   /**
    * El constructor del componente
    * @param route Activador de las rutas
    * @param proveedorService Servicio del proveedor para desplegar el detail
    */
  constructor(
    private route: ActivatedRoute,
    private proveedorService: ProveedorService
  ) { }

 /**
    * El id del proveedor que viene en el path get .../proveedores/proveedor_id
    */
   proveedor_id: number;

    /**
    * El metodo que obtiene el proveedor del que queremos ver el detalle
    */
   getProveedorDetail(): void {
    this.proveedorService.getProveedorDetail(this.proveedor_id)
        .subscribe(proveedorDetail => {
            this.proveedorDetail = proveedorDetail
        });
}

  /**
    * El metodo que inicializa el componente
    * Necesitamos crear el proveedor para que nunca este indefinido
    */
   ngOnInit() {
    this.proveedor_id = +this.route.snapshot.paramMap.get('id');
    if (this.proveedor_id){
    this.proveedorDetail = new ProveedorDetail();
    this.getProveedorDetail();
    }
    }
}
