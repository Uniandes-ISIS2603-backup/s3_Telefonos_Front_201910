import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Seguro } from './seguro';
import { Observable } from 'rxjs';
const API_URL = environment.apiURL;
const seguros = '/seguros';

/**
* Servicio proveedor de todo lo relacionado con seguros
*/
@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  /**
    * Constructor del servicio
    * @param http El HttpClient - Es necesario para desarrollar los request
    */
   constructor(private http: HttpClient) { }
   
   /**
    * Devuleve el objeto Observable que contiene la lista de seguros obtenidos del API
    * @returns La lista de seguros en tiempo real 
    */
   getSeguros(): Observable<Seguro[]> {
    return this.http.get<Seguro[]>(API_URL+seguros);
  }

  /**
    * Retorna el objeto observable con los detalles de un seguro obtenioa del API
    * @returns Los detalles de la factura
    */
   getSeguroDetail(seguroId): Observable<Seguro> {
    return this.http.get<Seguro>(`${API_URL}${seguros}/${seguroId}`);
   }

  /**
    * Crea un seguro
    * @param factura El nuevo seguro
    * @returns La confirmacion de que el seguro fue creado
    */
   creatSeguro(seguro):Observable<Seguro>{
    return this.http.post<Seguro>(API_URL+seguros, seguro);
  }  
}
 