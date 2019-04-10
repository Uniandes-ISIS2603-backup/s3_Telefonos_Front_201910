import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaService } from './factura.service';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import { FormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FacturaCreateComponent } from './factura-create/factura-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPermissionsModule
  ],
  declarations: [FacturaListComponent, FacturaDetailComponent, FacturaCreateComponent],
  providers: [FacturaService],
  exports:[FacturaListComponent]
})
export class FacturaModule { }
