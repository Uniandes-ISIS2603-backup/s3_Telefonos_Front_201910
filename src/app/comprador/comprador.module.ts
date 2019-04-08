import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompradorListComponent } from './comprador-list/comprador-list.component';
import { CompradorService } from './comprador.service';
import { CompradorDetailComponent } from './comprador-detail/comprador-detail.component';
import { CompradorCreateComponent } from './comprador-create/comprador-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CompradorListComponent, CompradorDetailComponent, CompradorCreateComponent],
  providers: [CompradorService],
  exports:[CompradorListComponent]
})
export class CompradorModule { }
