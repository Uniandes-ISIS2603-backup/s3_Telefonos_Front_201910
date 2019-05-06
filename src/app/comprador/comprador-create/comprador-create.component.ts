import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompradorService } from '../comprador.service';
import { Comprador } from '../comprador';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comprador-create',
  templateUrl: './comprador-create.component.html',
  styleUrls: ['./comprador-create.component.css']
})
export class CompradorCreateComponent implements OnInit {

  /**
   * El constructor del componente
   * @param compradorService Proveedor del servicio de comprador
   * @param toastrService El toastr para mostrar mensajes al usuario
   */
  constructor(
    private compradorService: CompradorService,
    private toastrService: ToastrService
  ) { }

  comprador: Comprador;


  /**
    * La salida que le indica al componente padre
    * que el usuario no quiere crear un comprador
    */
    @Output() cancel = new EventEmitter();

    /**
    * La salida que le indica al componente padre
    * que el usuario quiere crear un comprador
    */
    @Output() create = new EventEmitter();

    /**
    * Crea un comprador
    */
    createComprador
    (): Comprador
     {
        console.log(this.comprador);
        this.compradorService.createComprador(this.comprador).subscribe((comprador) => {
                this.comprador = comprador;
                this.create.emit();
                this.toastrService.success('Su perfil fue creado, por favor oprima finalizar');
            });
            return this.comprador;
    }

    /**
    * Emite la senial para indicar al componente padre que
    *el usuario no quiere crear un comprador
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * La funcion que inicializa el componente
    */
    ngOnInit() {
        this.comprador = new Comprador ();
    }

}
