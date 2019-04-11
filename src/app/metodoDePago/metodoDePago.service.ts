import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MetodoDePago } from './metodoDePago';
import { Observable } from 'rxjs';
const API_URL = environment.apiURL;
const metodosDePago = '/metodosDePago';

/**
* Servicio proveedor de todo lo relacionado con metodos de pago
*/
@Injectable({
  providedIn: 'root'
})
export class MetodoDePagoService {

  /**
    * Constructor del servicio
    * @param http El HttpClient - Es necesario para desarrollar los request
    */
   constructor(private http: HttpClient) { }
   
   /**
    * Devuleve el objeto Observable que contiene la lista de los metodos de pago obtenidas del API
    * @returns La lista de facturas en tiempo real 
    */
   getMetodosDePago(): Observable<MetodoDePago[]> {
    return this.http.get<MetodoDePago[]>(API_URL+metodosDePago);
  }

  /**
    * Retorna el objeto observable con los detalles de un metodo de pago obtenida del API
    * @returns Los detalles del metodo de pago
    */
   getMetodoDePagoDetail(metodoDePagoId): Observable<MetodoDePago> {
    return this.http.get<MetodoDePago>(`${API_URL}${metodosDePago}/${metodoDePagoId}`);
   }

  /**
    * Crea un Metodo De Pago
    * @param metodoDePago el nuevo metodo de pago
    * @returns La confirmacion de que el metodo de pago fue creado
    */
   createMetodoDePago(metodoDePago):Observable<MetodoDePago>{
    return this.http.post<MetodoDePago>(API_URL+metodosDePago, metodoDePago);
  }  
}
