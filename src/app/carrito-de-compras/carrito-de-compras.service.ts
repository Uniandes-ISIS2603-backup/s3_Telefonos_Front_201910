import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoDeComprasDetail } from './carritoDeCompras-detail';
import { CarritoDeCompras } from './carritoDeCompras';
import { HttpClient } from '@angular/common/http';


const API_URL ='../../assets/';
const CARROS='carritoDeCompras.json';
@Injectable({
  providedIn: 'root'
})
export class CarritoDeComprasService {
  /**
   * Constructor by default
   * @param http, conexion que permite realizar los protocolos HTTP
   */
  constructor (private http: HttpClient){ }

  /**
   * Retorna la lista de carros de compras
   */
  getCarritosDeCompras(): Observable<CarritoDeCompras[]>{
      return this.http.get<CarritoDeCompras[]>(API_URL+CARROS);
      
  }

  /**
   * Retorna una carrito de compras especifico con el id ingresado por parametro
   */
  getCarritoDeComprasDetail(idCarro:number): Observable<CarritoDeComprasDetail>{
    return this.http.get<CarritoDeComprasDetail>(API_URL+'carritoDeCompras-'+idCarro+'.json');
  }
}
