import { Component, OnInit, Input } from '@angular/core';
import { ListaDeDeseosService } from '../lista-de-deseos.service';
import { ListaDeDeseos } from '../listaDeDeseos';
import { ListaDeDeseosDetail } from '../listadedeseos-detail';

@Component({
  selector: 'app-listadedeseos-list',
  templateUrl: './listadedeseos-list.component.html',
  styleUrls: ['./listadedeseos-list.component.css']
})
export class ListadedeseosListComponent implements OnInit {

  constructor(private listaService: ListaDeDeseosService) { }
  @Input() listas: ListaDeDeseos[];

   /**
    * Shows or hides the lista-create-component
    */
showCreate: boolean;

/**
     * El id de la lista seleccionada
     */
    lista_id: number;

 /**
     * La lista de deseos seleccionada
     */
    selectedLista : ListaDeDeseos; 

     /**
     * Indica cual es la lista seleccionada
     * @param lista_id id de la lista seleccionada
     */
    onSelected(lista_id: number):void {
      this.lista_id = lista_id;
      this.selectedLista = new ListaDeDeseosDetail();
      this.getListaDetail();
}

/**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    if (this.selectedLista) {
        this.selectedLista = undefined;
        this.lista_id = undefined;
    }
    this.showCreate = !this.showCreate;
}

/**
 * Llama el servicio para obtener el detalle de la lista seleccionada
 */
getListaDetail(): void {
  this.listaService.getListaDeDeseosDetail(this.lista_id)
      .subscribe(e => {
          this.selectedLista = e;
          console.log(this.selectedLista);
          
      });
}

  getListas(): void{
    this.listaService.getListasDeDeseos().subscribe(theTablets => this.listas = theTablets);
  }

  ngOnInit() {
    this.showCreate = false;
    this.selectedLista = undefined;
    this.lista_id = undefined;
    this.getListas();
  }



}
