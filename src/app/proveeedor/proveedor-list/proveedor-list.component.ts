import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../proveedor';
import { ProveedorDetail } from '../proveedor-detail';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private proveedorService: ProveedorService,
    private viewRef: ViewContainerRef,
    private modalDialogService:ModalDialogService,
    private toastrService: ToastrService) { }

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
    * Muestra o esconde proveedor-create-component 
    */
   showCreate: boolean;

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
    * Muetsra o esconde el componente de crear
    */
   showHideCreate(): void {
    if (this.selectedProveedor) {
        this.selectedProveedor = undefined;
        this.proveedor_id = undefined;
    }
    this.showCreate = !this.showCreate;
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
    * Borra un proveedor
    */
   deleteProveedor(proveedorId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Borrar un proveedor',
        childComponent: SimpleModalComponent,
        data: {text: '¿Está seguro de eliminar este proveedor?'},
        actionButtons: [
            {
                text: 'Sí',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.proveedorService.deleteProveedor(proveedorId).subscribe(() => {
                        this.toastrService.error("El proveedor se eliminó exitosamente", "Proveedor eliminado");
                        this.ngOnInit();
                    }, err => {
                        this.toastrService.error(err, "Error");
                    });
                    return true;
                }
            },
            {text: 'No', onAction: () => true}
        ]
    });
}


/**
    * Este metodo va a inicializar el componente obteniendo la lista de proveedores del servicio
    * Este metodo va a ser llamado cuando el componente sea creado
    */
  ngOnInit() {
    this.showCreate = false;
    this.selectedProveedor = undefined;
    this.proveedor_id = undefined;
    this.getProveedores();
  }

}
