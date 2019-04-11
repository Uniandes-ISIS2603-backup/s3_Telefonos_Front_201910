import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadedeseosListComponent } from './listadedeseos-list/listadedeseos-list.component';
import { ListadedeseosDetailComponent } from './listadedeseos-detail/listadedeseos-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ListaDeDeseosService } from './lista-de-deseos.service';
import { ListadedeseosCrearComponent } from './listadedeseos-crear/listadedeseos-crear.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule, FormsModule
  ],
  declarations: [ListadedeseosListComponent, ListadedeseosDetailComponent, ListadedeseosCrearComponent],
  providers:[ListaDeDeseosService],
  exports:[ListadedeseosListComponent, ListadedeseosDetailComponent, ListadedeseosCrearComponent]
})
export class ListadedeseosModule { }
