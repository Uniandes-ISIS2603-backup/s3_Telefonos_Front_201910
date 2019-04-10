import { Component, OnInit, Input } from '@angular/core';
import { CarritoDeCompras } from '../carritoDeCompras';
import { CarritoDeComprasService } from '../carrito-de-compras.service';

@Component({
  selector: 'app-carrito-de-compras-list',
  templateUrl: './carrito-de-compras-list.component.html',
  styleUrls: ['./carrito-de-compras-list.component.css']
})
export class CarritoDeComprasListComponent implements OnInit {

  /**
   * Constructor by default
   * @param carritoService servicio que permite invocar los métodos del protocolo HTTP
   */
  constructor(private carritoService: CarritoDeComprasService) { }
  /**
   * input de carritos
   */
  @Input() carritos: CarritoDeCompras[];

  /**
   * Método que llama al método del servicio que retorna todos los carritos de compras
   */
  getCarritos(): void{
    this.carritoService.getCarritosDeCompras().subscribe(e => this.carritos = e);
  }


  /**
   * Metodo que se ejecuta al iniciar el componente
   */
  ngOnInit() {
    this.getCarritos();
  }

}
