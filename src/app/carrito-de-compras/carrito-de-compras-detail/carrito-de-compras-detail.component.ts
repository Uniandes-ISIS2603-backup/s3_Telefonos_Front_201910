    import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { CarritoDeComprasDetail } from '../carritoDeCompras-detail';
import { CarritoDeComprasService } from '../carrito-de-compras.service';

    @Component({
      selector: 'app-carrito-de-compras-detail',
      templateUrl: './carrito-de-compras-detail.component.html',
      styleUrls: ['./carrito-de-compras-detail.component.css']
    })
    export class CarritoDeComprasDetailComponent implements OnInit {

      /**
       * Constructor by default
       * @param cService servicio que permite invocar métodos http
       * @param route ruta
       */
      constructor(private cService:CarritoDeComprasService,
        private route: ActivatedRoute) { }

    /**
     * Carrito detallado
     */
    carritoDetail:CarritoDeComprasDetail;

    /**
     * Id del carrito detallado
     */
    carrito_id: number;

    /**
     * LOADER
     */
    loader: any;

    /**
     * invoca el método que retorna el carrito de compras con el id que se tiene en el atributo carrito_id
     */
    getCarritoDeComprasDetail():void{
    this.cService.getCarritoDeComprasDetail(this.carrito_id).subscribe(e=>{this.carritoDetail = e});
    }

    /**
     * Método que sucede al cargarse
     */
    onLoad(params){
    this.carrito_id = params['id'];
    console.log(" en detail " + this.carrito_id);
    this.carritoDetail = new CarritoDeComprasDetail();
    this.getCarritoDeComprasDetail();
    }

    /**
     * Método que sucede al inicializarse
     */
    ngOnInit() {
    this.loader = this.route.params.subscribe((params:Params) => this.onLoad(params));
    }

    /**
     * Método que sucede "onDestroy"
     */
    ngOnDestroy(){
    this.loader.unsubscribe();
    }

    }
