import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Factura } from './factura';
import { Observable } from 'rxjs';
const API_URL = environment.apiURL;
const facturas = '/facturas';

/**
* Servicio proveedor de todo lo relacionado con facturas
*/
@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  /**
    * Constructor del servicio
    * @param http El HttpClient - Es necesario para desarrollar los request
    */
   constructor(private http: HttpClient) { }
   
   /**
    * Devuleve el objeto Observable que contiene la lista de facturas obtenidas del API
    * @returns La lista de facturas en tiempo real 
    */
   getFacturas(): Observable<Factura[]> {
    return this.http.get<Factura[]>(API_URL+facturas);
  }

  /**
    * Retorna el objeto observable con los detalles de una factura obtenida del API
    * @returns Los detalles de la factura
    */
   getFacturaDetail(facturaId): Observable<Factura> {
    return this.http.get<Factura>(`${API_URL}${facturas}/${facturaId}`);
   }

  /**
    * Crea una factura
    * @param factura La nueva factura
    * @returns La confirmacion de que la factura fue creada
    */
   createFactura(factura):Observable<Factura>{
    return this.http.post<Factura>(API_URL+facturas, factura);
  }  
}
