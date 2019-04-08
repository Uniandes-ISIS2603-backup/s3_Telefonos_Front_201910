import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabletListComponent } from './tablet-list/tablet-list.component';
import { TabletService } from './tablet.service';
import { TabletDetailComponent } from './tablet-detail/tablet-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [TabletListComponent, TabletDetailComponent],
  providers:[TabletService],
  exports: [TabletListComponent, TabletDetailComponent]
})
export class TabletModule { }
