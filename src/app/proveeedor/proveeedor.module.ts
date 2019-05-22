import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';
import { ProveedorService } from './proveedor.service';
import { ProveedorCreateComponent } from './proveedor-create/proveedor-create.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,  
    NgxPermissionsModule.forRoot()
  ],
  declarations: [ProveedorListComponent, ProveedorDetailComponent, ProveedorCreateComponent],
  providers:[ProveedorService],
  exports:[ProveedorListComponent, ProveedorCreateComponent]
})
export class ProveeedorModule { } 
