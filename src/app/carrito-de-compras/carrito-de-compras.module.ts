import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoDeComprasListComponent } from './carrito-de-compras-list/carrito-de-compras-list.component';
import { CarritoDeComprasDetailComponent } from './carrito-de-compras-detail/carrito-de-compras-detail.component';
import { CarritoDeComprasCreateComponent } from './carrito-de-compras-create/carrito-de-compras-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarritoDeComprasListComponent, CarritoDeComprasDetailComponent, CarritoDeComprasCreateComponent]
})
export class CarritoDeComprasModule { }
