import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Comprador } from './comprador';
import { CompradorDetail } from './comprador-detail';

import { environment } from '../../environments/environment';
const API_URL = "../../assets/";
const compradores = 'compradores.json';
const comprador = 'comprador-'

/**
* Servicio proveedor de todo lo relacionado con compradores
*/
@Injectable({
  providedIn: 'root'
})
export class CompradorService {

  /**
    * Constructor del servicio
    * @param http El HttpClient - Es necesario para desarrollar los request
    */
  constructor(private http: HttpClient) { }

  /**
    * Devuleve el objeto Observable que contiene la lista de compradores obtenidos del API
    * @returns La lista de compradores en tiempo real 
    */
   getCompradores(): Observable<Comprador[]> {
    return this.http.get<Comprador[]>(API_URL + compradores);
  }

  /**
    * Retorna el objeto observanle con los detalles de un autor obtenido del API
    * @returns Los detalles del comprador
    */
   getCompradorDetail(compradorId): Observable<CompradorDetail> {
    return this.http.get<CompradorDetail>(API_URL+comprador+compradorId+'.json');
}

}
