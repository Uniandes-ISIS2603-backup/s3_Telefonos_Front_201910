import { Component, OnInit, Input } from '@angular/core';
import { Tablet } from '../tablet';
import {TabletService} from "../tablet.service";
import { TabletDetail } from '../tablet-detail';

@Component({
  selector: 'app-tablet-list',
  templateUrl: './tablet-list.component.html',
  styleUrls: ['./tablet-list.component.css']
})
export class TabletListComponent implements OnInit {

  constructor(private tabletService: TabletService) { }
  @Input() tablets: Tablet[];

   /**
    * Shows or hides the tablet-create-component
    */
showCreate: boolean;

/**
     * La referencia de la tablet seleccionada
     */
    tablet_referencia: string;

 /**
     * La tablet seleccionada
     */
    selectedTablet : Tablet; 

     /**
     * Indica cual es la tablet seleccionada
     * @param tablet_referencia Referencia de la tablet seleccionada
     */
    onSelected(tablet_referencia: string):void {
      this.tablet_referencia = tablet_referencia;
      this.selectedTablet = new TabletDetail();
      this.getTabletDetail();
}

/**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    if (this.selectedTablet) {
        this.selectedTablet = undefined;
        this.tablet_referencia = undefined;
    }
    this.showCreate = !this.showCreate;
}

/**
 * Llama el servicio para obtener el detalle del comprador seleccionado
 */
getTabletDetail(): void {
  this.tabletService.getTabletDetail(this.tablet_referencia)
      .subscribe(e => {
          this.selectedTablet = e;
          console.log(this.selectedTablet);
          
      });
}

  getTablets(): void{
    this.tabletService.getTablets().subscribe(theTablets => this.tablets = theTablets);
  }

  ngOnInit() {
    this.showCreate = false;
    this.selectedTablet = undefined;
    this.tablet_referencia = undefined;
    this.getTablets();
  }



}
