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
  onLoad(params){
    this.tablet_referencia = params['referencia'];
    console.log(" en detail " + this.tablet_referencia);
    this.tabletDetail = new TabletDetail(null, null, null, null);
    this.getTabletDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params:Params) => this.onLoad(params));
  }

  ngOnDestroy(){
    this.loader.unsubscribe();
  }

}
