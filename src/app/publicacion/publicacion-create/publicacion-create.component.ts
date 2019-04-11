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

  constructor(
    private publicacionService: PublicacionService,
    private toastrService: ToastrService
  ) { }

  publicacion: Publicacion;


  /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new author
    */
    @Output() create = new EventEmitter();

    /**
    * Crea un publicacion
    */
    createPublicacion
    (): Publicacion
     {
        console.log(this.publicacion);
        this.publicacionService.createPublicacion(this.publicacion).subscribe((publicacion) => {
                this.publicacion = publicacion;
                this.create.emit();
                this.toastrService.success("El publicacion fue creado", "Creacion publicacion");
                
            });
            return this.publicacion;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.publicacion = new Publicacion
        ();
    }

}
