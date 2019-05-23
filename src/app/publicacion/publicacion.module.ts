import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionListComponent } from './publicacion-list/publicacion-list.component';
import { PublicacionService } from './publicacion.service';
import { PublicacionDetailComponent } from './publicacion-detail/publicacion-detail.component';
import { PublicacionCreateComponent } from './publicacion-create/publicacion-create.component';
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
  declarations: [PublicacionListComponent, PublicacionDetailComponent, PublicacionCreateComponent],
  providers: [PublicacionService],
  exports:[PublicacionListComponent, PublicacionCreateComponent,  PublicacionDetailComponent]
})
export class PublicacionModule { }
 