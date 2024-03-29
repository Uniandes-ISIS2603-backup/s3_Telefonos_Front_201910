import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelularListComponent } from './celular-list/celular-list.component';
import { CelularDetailComponent } from './celular-detail/celular-detail.component';
import { CelularCreateComponent } from './celular-create/celular-create.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CelularService } from './celular.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule, 
    AppRoutingModule, 
    FormsModule,
    NgbModule
  ],
  declarations: [CelularListComponent, CelularDetailComponent, CelularCreateComponent],
  exports: [CelularListComponent, CelularDetailComponent, CelularCreateComponent],
  providers: [CelularService]
})
export class CelularModule { }
