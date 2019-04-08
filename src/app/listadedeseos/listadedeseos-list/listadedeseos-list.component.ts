import { Component, OnInit, Input } from '@angular/core';
import { ListaDeDeseosService } from '../lista-de-deseos.service';
import { ListaDeDeseos } from '../listaDeDeseos';

@Component({
  selector: 'app-listadedeseos-list',
  templateUrl: './listadedeseos-list.component.html',
  styleUrls: ['./listadedeseos-list.component.css']
})
export class ListadedeseosListComponent implements OnInit {

  constructor(private listaService: ListaDeDeseosService) { }
  @Input() listas: ListaDeDeseos[];

  getTablets(): void{
    this.listaService.getListasDeDeseos().subscribe(e => this.listas = e);
  }

  ngOnInit() {
    this.getTablets();
  }

}
