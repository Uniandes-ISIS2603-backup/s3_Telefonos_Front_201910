import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';
import { ProveedorService } from './proveedor.service';
import { ProveedorCreateComponent } from './proveedor-create/proveedor-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ProveedorListComponent, ProveedorDetailComponent, ProveedorCreateComponent],
  providers:[ProveedorService],
  exports:[ProveedorListComponent]
})
export class ProveeedorModule { } 
