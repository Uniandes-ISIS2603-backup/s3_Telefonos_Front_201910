import { Component, OnInit, Input } from '@angular/core';
import { Tablet } from '../tablet';
import {TabletService} from "../tablet.service";

@Component({
  selector: 'app-tablet-list',
  templateUrl: './tablet-list.component.html',
  styleUrls: ['./tablet-list.component.css']
})
export class TabletListComponent implements OnInit {

  constructor(private tabletService: TabletService) { }
  @Input() tablets: Tablet[];

  getTablets(): void{
    this.tabletService.getTablets().subscribe(theTablets => this.tablets = theTablets);
  }

  ngOnInit() {
    this.getTablets();
  }



}
