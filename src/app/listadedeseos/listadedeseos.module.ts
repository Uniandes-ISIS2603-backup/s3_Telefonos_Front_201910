import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadedeseosListComponent } from './listadedeseos-list/listadedeseos-list.component';
import { ListadedeseosDetailComponent } from './listadedeseos-detail/listadedeseos-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ListaDeDeseosService } from './lista-de-deseos.service';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule
  ],
  declarations: [ListadedeseosListComponent, ListadedeseosDetailComponent],
  providers:[ListaDeDeseosService],
  exports:[ListadedeseosListComponent, ListadedeseosDetailComponent]
})
export class ListadedeseosModule { }
