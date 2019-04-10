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

  constructor(
    private compradorService: CompradorService,
    private toastrService: ToastrService
  ) { }

  comprador: Comprador;


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
    * Crea un comprador
    */
    createComprador
    (): Comprador
     {
        console.log(this.comprador);
        this.compradorService.createComprador(this.comprador).subscribe((comprador) => {
                this.comprador = comprador;
                this.create.emit();
                this.toastrService.success("El comprador fue creado", "Creacion comprador");
                
            });
            return this.comprador;
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
        this.comprador = new Comprador
        ();
    }

}
