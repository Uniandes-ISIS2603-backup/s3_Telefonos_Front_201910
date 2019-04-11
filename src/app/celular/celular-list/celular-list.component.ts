import { Component, OnInit, Input } from '@angular/core';
import { CelularService } from '../celular.service';
import { Celular } from '../celular';

@Component({
  selector: 'app-celular-list',
  templateUrl: './celular-list.component.html',
  styleUrls: ['./celular-list.component.css']
})
export class CelularListComponent implements OnInit {
  /**
   * Contstructor by default
   * @param celularService, el servicio de celular que permite usar los metodos del protocolo http
   */
  constructor(private celularService: CelularService) { }

  /**
   * Input de una lista de celulares
   */
  @Input() celulares: Celular[];

  /**
   * Retorna todos los celulares de la app
   */
  getCelulares(): void{
    this.celularService.getCelulares().subscribe(theCelulars => this.celulares = theCelulars);
  }
  
  /**
  * Método que se ejecuta al inicializar la clase
  */
  ngOnInit() {
    this.getCelulares();
  }



}
