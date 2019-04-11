import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabletListComponent } from './tablet-list/tablet-list.component';
import { TabletService } from './tablet.service';
import { TabletDetailComponent } from './tablet-detail/tablet-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { TabletCrearComponent } from './tablet-crear/tablet-crear.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [TabletListComponent, TabletDetailComponent, TabletCrearComponent],
  providers:[TabletService],
  exports: [TabletListComponent, TabletDetailComponent, TabletCrearComponent]
})
export class TabletModule { }
