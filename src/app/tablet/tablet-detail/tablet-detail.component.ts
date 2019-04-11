import { Component, OnInit } from '@angular/core';
import { TabletService } from '../tablet.service';
import { ActivatedRoute, Params } from '@angular/router';
import { TabletDetail } from '../tablet-detail';

@Component({
  selector: 'app-tablet-detail',
  templateUrl: './tablet-detail.component.html',
  styleUrls: ['./tablet-detail.component.css']
})
export class TabletDetailComponent implements OnInit {

  constructor(private tabletServide:TabletService,
              private route: ActivatedRoute) { }

  tabletDetail:TabletDetail;

  tablet_referencia: string;

  loader: any;

  getTabletDetail():void{
    this.tabletServide.getTabletDetail(this.tablet_referencia).subscribe(tabletDetail=>{this.tabletDetail = tabletDetail});
  }


  ngOnInit() {
    this.tablet_referencia = this.route.snapshot.paramMap.get('referencia');
    if (this.tablet_referencia){
    this.tabletDetail = new TabletDetail();
    this.getTabletDetail();
  }
  }
  
}


