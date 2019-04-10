import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionListComponent } from './publicacion-list/publicacion-list.component';
import { PublicacionService } from './publicacion.service';
import { PublicacionDetailComponent } from './publicacion-detail/publicacion-detail.component';
import { PublicacionCreateComponent } from './publicacion-create/publicacion-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PublicacionListComponent, PublicacionDetailComponent, PublicacionCreateComponent],
  providers: [PublicacionService],
  exports:[PublicacionListComponent]
})
export class PublicacionModule { }
