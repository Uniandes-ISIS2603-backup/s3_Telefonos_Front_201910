import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoDeComprasListComponent } from './carrito-de-compras-list/carrito-de-compras-list.component';
import { CarritoDeComprasDetailComponent } from './carrito-de-compras-detail/carrito-de-compras-detail.component';
import { CarritoDeComprasCreateComponent } from './carrito-de-compras-create/carrito-de-compras-create.component';
import { CarritoDeComprasService } from './carrito-de-compras.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule, FormsModule
  ],
  declarations: [CarritoDeComprasListComponent, CarritoDeComprasDetailComponent, CarritoDeComprasCreateComponent],
  providers:[CarritoDeComprasService],
  exports:[CarritoDeComprasListComponent, CarritoDeComprasDetailComponent, CarritoDeComprasCreateComponent]
})
export class CarritoDeComprasModule { }
