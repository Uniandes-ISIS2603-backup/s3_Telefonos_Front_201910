import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PublicacionService } from '../publicacion.service';
import { Publicacion } from '../publicacion';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-publicacion-create',
  templateUrl: './publicacion-create.component.html',
  styleUrls: ['./publicacion-create.component.css']
})
export class PublicacionCreateComponent implements OnInit {

  /**
   * El constructor del componente
   * @param publicacionService Proveedor del servicio de publicacion
   * @param toastrService El toastr para mostrar mensajes al usuario
   */
  constructor(
    private publicacionService: PublicacionService,
    private toastrService: ToastrService
  ) { }

  publicacion: Publicacion;


  /**
    * La salida que le indica al componente padre
    * que el usuario no quiere crear una publicacion
    */
    @Output() cancel = new EventEmitter();

    /**
    * La salida que le indica al componente padre
    * que el usuario quiere crear una publicacion
    */
    @Output() create = new EventEmitter();

    /**
    * Crea una publicacion
    */
    createPublicacion
    (): Publicacion
     {
        console.log(this.publicacion);
        this.publicacionService.createPublicacion(this.publicacion).subscribe((publicacion) => {
                this.publicacion = publicacion;
                this.create.emit();
                this.toastrService.success("La publicacion fue creada", "Publicacion creation");
                
            });
            return this.publicacion;
    }

    /**
    * Emite la senial para indicar al componente padre que
    *el usuario no quiere crear una publicacion
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * La funcion que inicializa el componente
    */
    ngOnInit() {
        this.publicacion = new Publicacion ();
    }

}
