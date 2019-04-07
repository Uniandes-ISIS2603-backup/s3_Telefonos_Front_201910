import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompradorListComponent } from './comprador-list/comprador-list.component';
import { CompradorService } from './comprador.service';
import { CompradorDetailComponent } from './comprador-detail/comprador-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompradorListComponent, CompradorDetailComponent],
  providers: [CompradorService],
  exports:[CompradorListComponent]
})
export class CompradorModule { }
