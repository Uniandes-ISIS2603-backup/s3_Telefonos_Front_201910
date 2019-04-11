import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListaDeDeseosService } from '../lista-de-deseos.service';
import { ToastrService } from 'ngx-toastr';
import { ListaDeDeseos } from '../listaDeDeseos';

@Component({
  selector: 'app-listadedeseos-crear',
  templateUrl: './listadedeseos-crear.component.html',
  styleUrls: ['./listadedeseos-crear.component.css']
})
export class ListadedeseosCrearComponent implements OnInit {

  constructor(
    private listaService: ListaDeDeseosService,
    private toastrService: ToastrService
  ) { }

  lista: ListaDeDeseos;


  /**
    * The output which tells the parent component
    * that the user no longer wants to create a lista de deseos
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new lista de deseos
    */
    @Output() create = new EventEmitter();

    /**
    * Crea una lista de deseos
    */
    createListaDeDeseos
    (): ListaDeDeseos
     {
        console.log(this.lista);
        this.listaService.createListaDeDeseos(this.lista).subscribe((e) => {
                this.lista = e;
                this.create.emit();
                this.toastrService.success("La lista de deseos fue creada", "Creacion lista de deseos");
                
            });
            return this.lista;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create a tablet
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
      
        this.lista = new ListaDeDeseos();
}

}
