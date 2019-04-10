import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelularListComponent } from './celular-list/celular-list.component';
import { CelularDetailComponent } from './celular-detail/celular-detail.component';
import { CelularCreateComponent } from './celular-create/celular-create.component';
import { CComponent } from './c/c.component';
import { CelularUpdateComponent } from './celular-update/celular-update.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CelularListComponent, CelularDetailComponent, CelularCreateComponent, CComponent, CelularUpdateComponent]
})
export class CelularModule { }
