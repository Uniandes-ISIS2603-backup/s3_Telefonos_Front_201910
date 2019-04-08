import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';
import { ProveedorService } from './proveedor.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ProveedorListComponent, ProveedorDetailComponent],
  providers:[ProveedorService],
  exports:[ProveedorListComponent]
})
export class ProveeedorModule { } 
