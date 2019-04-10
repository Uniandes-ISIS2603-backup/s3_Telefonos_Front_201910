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
  /**
   * 
   * @param celularService, conexion al servicio para los métodos http 
   * @param route 
   */
  constructor(private celularService:CelularService,
              private route: ActivatedRoute) { }
  /**
   * Detalle del celular
   */
  celularDetail:CelularDetail;
  
  /**
   * imei del celular
   */
  celular_imei: string;

  /**
   * LOADER
   */
  loader: any;

  /**
   * Metodo que retorna el detalle del celular obtenido en la invocaion http
   */
  getCelularDetail():void{
    this.celularService.getCelularDetail(this.celular_imei).subscribe(celularDetail=>{this.celularDetail =celularDetail});
  }

  onLoad(params){
    this.celular_imei = params['imei'];
    console.log(" en detail " + this.celular_imei);
    this.celularDetail = new CelularDetail(null, null, null, null,null);
    this.getCelularDetail();
  }
  /**
   * Metodo que se ejecuta al iniciar
   */
  ngOnInit() {
    this.loader = this.route.params.subscribe((params:Params) => this.onLoad(params));
  }

  ngOnDestroy(){
    this.loader.unsubscribe();
  }

}