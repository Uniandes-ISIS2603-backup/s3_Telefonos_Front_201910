import { Component, OnInit, Input } from '@angular/core';
import { CelularService } from '../celular.service';
import { Celular } from '../celular';

@Component({
  selector: 'app-celular-list',
  templateUrl: './celular-list.component.html',
  styleUrls: ['./celular-list.component.css']
})
export class CelularListComponent implements OnInit {

  constructor(private celularService: CelularService) { }
  @Input() celulares: Celular[];

  getCelulares(): void{
    this.celularService.getCelulares().subscribe(theCelulars => this.celulares = theCelulars);
  }

  ngOnInit() {
    this.getCelulares();
  }



}
