import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetodoDePagoListComponent } from './metodoDePago-list/metodoDePago-list.component';
import { MetodoDePagoService } from './metodoDePago.service';
import { MetodoDePagoDetailComponent } from './metodoDePago-detail/metodoDePago-detail.component';
import { FormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MetodoDePagoCreateComponent } from './metodoDePago-create/metodoDePago-create.component';
import { CompradorModule } from '../comprador/comprador.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPermissionsModule,
    CompradorModule
  ],
  declarations: [MetodoDePagoListComponent, MetodoDePagoDetailComponent, MetodoDePagoCreateComponent],
  providers: [MetodoDePagoService],
  exports:[MetodoDePagoListComponent]
})
export class MetodoDePagoModule { }
