import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguroListComponent } from './seguro-list/seguro-list.component';
import { SeguroCreateComponent } from './seguro-create/seguro-create.component';
import { SeguroDetailComponent } from './seguro-detail/seguro-detail.component';
import { SeguroService } from './seguro.service';
import { FormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPermissionsModule
  ],
  declarations: [SeguroListComponent, SeguroCreateComponent, SeguroDetailComponent],
  providers: [SeguroService],
  exports:[SeguroListComponent]
})
export class SeguroModule { } 
