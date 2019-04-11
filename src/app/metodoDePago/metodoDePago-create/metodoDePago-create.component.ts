import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MetodoDePagoService } from '../metodoDePago.service';
import { ToastrService } from 'ngx-toastr';
import { MetodoDePago } from '../metodoDePago';
import { Comprador } from '../../comprador/comprador';
import { CompradorService } from '../../comprador/comprador.service';
import { ProveedorService } from '../../proveeedor/proveedor.service';
import { Proveedor } from '../../proveeedor/proveedor';

@Component({
  selector: 'app-metodoDePago-create',
  templateUrl: './metodoDePago-create.component.html',
  styleUrls: ['./metodoDePago-create.component.css']
})
export class MetodoDePagoCreateComponent implements OnInit {

  /**
   * El constructor del componente
   * @param metodoDePagoService Proveedor del servicio de metodoDePago
   * @param toastrService El toastr para mostrar mensajes al usuario
   */
  constructor(
    private metodoDePagoService: MetodoDePagoService,
    private compradorService: CompradorService,
    private proveedorService: ProveedorService,
    private toastrService: ToastrService
  ) { }

  /** 
   * Nuevo metodo de pago
   */
  metodoDePago: MetodoDePago;




  /**
    * La salida que le indica al componente padre
    * que el usuario no quiere crear un metodo de pago
    */
    @Output() cancel = new EventEmitter();

    /**
    * La salida que le indica al componente padre
    * que el usuario quiere crear un metodo de pago
    */
    @Output() create = new EventEmitter();

    /**
    * Crea un metodo de pago
    */
    createMetodoDePago
    (): MetodoDePago
     {
        console.log(this.metodoDePago);
        this.metodoDePagoService.createMetodoDePago(this.metodoDePago).subscribe((metodoDePago) => {
                this.metodoDePago = metodoDePago;
                this.create.emit();
                this.toastrService.success("el metodo de pago fue creado", "MetodoDePago creation");
                
            });
            return this.metodoDePago;
    }

    /**
    * Emite la senial para indicar al componente padre que
    *el usuario no quiere crear un metodo de pago
    */
    cancelCreation(): void {
        this.cancel.emit();
    }



    /**
    * La funcion que inicializa el componente
    */
    ngOnInit() {
        this.metodoDePago = new MetodoDePago ();
       
    }

} 
