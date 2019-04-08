import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../proveedor';
import { ProveedorDetail } from '../proveedor-detail';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  /**
   * El constructor para el componente
   * @param proveedorService El proveedor del servicio Proveedor
   */
  constructor(private proveedorService: ProveedorService) { }

  /**
  * La lista de proveedores que pertenecen a CambiaPhone
  */
  proveedores: Proveedor[]

  /**
  * El identificador del proveedor seleccionado
  */
    proveedor_id: number;

  /**
     * El proveedor seleccionado
     */
    selectedProveedor : ProveedorDetail;  


  /**
     * Indica cual es el proveedor seleccionado
     * @param proveedor_id Identificador del proveedor seleccionado
     */
    onSelected(proveedor_id: number):void {
      this.proveedor_id = proveedor_id;
      this.selectedProveedor = new ProveedorDetail();
      this.getProveedorDetail();
    }

  /**
    * Llama el servicio para actualizar la lista de proveedores
    */
   getProveedores(): void {
    this.proveedorService.getProveedores()
        .subscribe(theProveedores => {
            this.proveedores = theProveedores;
        });
}

/**
 * Llama el servicio para obtener el detalle del proveedor seleccionado
 */
getProveedorDetail(): void {
  this.proveedorService.getProveedorDetail(this.proveedor_id)
      .subscribe(selectedProveedor => {
          this.selectedProveedor = selectedProveedor;
          console.log(this.selectedProveedor);
          
      });
}

/**
    * Este metodo va a inicializar el componente obteniendo la lista de proveedores del servicio
    * Este metodo va a ser llamado cuando el componente sea creado
    */
  ngOnInit() {
    this.getProveedores();
  }

}
