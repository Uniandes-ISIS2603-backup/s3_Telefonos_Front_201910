import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompradorListComponent } from './comprador-list/comprador-list.component';
import { CompradorService } from './comprador.service';
import { CompradorDetailComponent } from './comprador-detail/comprador-detail.component';
import { CompradorCreateComponent } from './comprador-create/comprador-create.component';
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
  declarations: [CompradorListComponent, CompradorDetailComponent, CompradorCreateComponent],
  providers: [CompradorService],
  exports:[CompradorListComponent, CompradorCreateComponent]
})
export class CompradorModule { }
 