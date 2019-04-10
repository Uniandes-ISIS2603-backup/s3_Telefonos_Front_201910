import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FacturaService } from '../factura.service';
import { ToastrService } from 'ngx-toastr';
import { Factura } from '../factura';

@Component({
  selector: 'app-factura-create',
  templateUrl: './factura-create.component.html',
  styleUrls: ['./factura-create.component.css']
})
export class FacturaCreateComponent implements OnInit {

  /**
   * El constructor del componente
   * @param facturaService Proveedor del servicio de factura
   * @param toastrService El toastr para mostrar mensajes al usuario
   */
  constructor(
    private facturaService: FacturaService,
    private toastrService: ToastrService
  ) { }

  factura: Factura;


  /**
    * La salida que le indica al componente padre
    * que el usuario no quiere crear una factura
    */
    @Output() cancel = new EventEmitter();

    /**
    * La salida que le indica al componente padre
    * que el usuario quiere crear una factura
    */
    @Output() create = new EventEmitter();

    /**
    * Crea una factura
    */
    createFactura
    (): Factura
     {
        console.log(this.factura);
        this.facturaService.createFactura(this.factura).subscribe((factura) => {
                this.factura = factura;
                this.create.emit();
                this.toastrService.success("La factura fue creada", "Factura creation");
                
            });
            return this.factura;
    }

    /**
    * Emite la senial para indicar al componente padre que
    *el usuario no quiere crear una factura
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * La funcion que inicializa el componente
    */
    ngOnInit() {
        this.factura = new Factura ();
    }

} 
