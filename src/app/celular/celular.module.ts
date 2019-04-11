import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelularListComponent } from './celular-list/celular-list.component';
import { CelularDetailComponent } from './celular-detail/celular-detail.component';
import { CelularCreateComponent } from './celular-create/celular-create.component';
import { CelularUpdateComponent } from './celular-update/celular-update.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CelularService } from './celular.service';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [CelularListComponent, CelularDetailComponent, CelularCreateComponent, CelularUpdateComponent],
  exports: [CelularListComponent, CelularDetailComponent, CelularCreateComponent, CelularUpdateComponent],
  providers: [CelularService]
})
export class CelularModule { }
