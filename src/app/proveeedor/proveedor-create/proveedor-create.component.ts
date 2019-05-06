import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from '../proveedor';

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})
export class ProveedorCreateComponent implements OnInit {

  /**
   * El constructor del componente
   * @param compradorService Proveedor del servicio de proveedor
   * @param toastrService El toastr para mostrar mensajes al usuario
   */
  constructor(
    private proveedorService: ProveedorService,
    private toastrService: ToastrService
  ) { }

  proveedor: Proveedor;


  /**
    * La salida que le indica al componente padre
    * que el usuario no quiere crear un proveedor
    */
    @Output() cancel = new EventEmitter();

    /**
    * La salida que le indica al componente padre
    * que el usuario quiere crear un proveedor
    */
    @Output() create = new EventEmitter();

    /**
    * Crea un proveedor
    */
    createProveedor
    (): Proveedor
     {
        console.log(this.proveedor);
        this.proveedorService.createProveedor(this.proveedor).subscribe((theProveedor) => {
                this.proveedor = theProveedor;
                this.create.emit();
                this.toastrService.success('Su perfil fue creado, por favor oprima finalizar');
            });
            return this.proveedor;
    }

    /**
    * Emite la senial para indicar al componente padre que
    *el usuario no quiere crear un proveedor
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * La funcion que inicializa el componente
    */
    ngOnInit() {
        this.proveedor = new Proveedor ();
    }

}
