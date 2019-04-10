import { Component, OnInit } from '@angular/core';
import { CelularDetail } from '../celular-detail';
import { ActivatedRoute, Params } from '@angular/router';
import { CelularService } from '../celular.service';

@Component({
  selector: 'app-celular-detail',
  templateUrl: './celular-detail.component.html',
  styleUrls: ['./celular-detail.component.css']
})
export class CelularDetailComponent implements OnInit {

  constructor(private tabletServide:CelularService,
              private route: ActivatedRoute) { }

  celularDetail:CelularDetail;

  celular_imei: string;

  loader: any;

  getCelularDetail():void{
    this.tabletServide.getCelularDetail(this.celular_imei).subscribe(celularDetail=>{this.celularDetail =celularDetail});
  }
  onLoad(params){
    this.celular_imei = params['imei'];
    console.log(" en detail " + this.celular_imei);
    this.celularDetail = new CelularDetail(null, null, null, null,null);
    this.getCelularDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params:Params) => this.onLoad(params));
  }

  ngOnDestroy(){
    this.loader.unsubscribe();
  }

}