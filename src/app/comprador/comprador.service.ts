import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Comprador } from './comprador';
import { CompradorDetail } from './comprador-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const compradores = '/compradores';

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
    return this.http.get<Comprador[]>(API_URL+compradores);
  }

  /**
    * Retorna el objeto observable con los detalles de un comprador obtenido del API
    * @returns Los detalles del comprador
    */
   getCompradorDetailByUsername(username): Observable<CompradorDetail> {
    return this.http.get<CompradorDetail>(`${API_URL}${compradores}/${username}`);
  }

   /**
    * Retorna el objeto observable con los detalles de un comprador obtenido del API por medio del usuario
    * @returns Los detalles del comprador
    */
   getCompradorDetail(compradorId): Observable<CompradorDetail> {
    return this.http.get<CompradorDetail>(`${API_URL}${compradores}/${compradorId}`);
  }

  /**
    * Crea un comprador
    * @param comprador El nuevo comprador
    * @returns La confirmacion de que el comprador fue creado
    */
  createComprador(comprador):Observable<Comprador>{
    return this.http.post<Comprador>(API_URL+compradores, comprador);
  }  

  /**
    * Borrar un comprador
    * @param comprapdorId El comprador que va a ser eliminado
    * @returns True si el comprador fue borrado, false de lo contrario
    */
   deleteComprador(compradorId): Observable<CompradorDetail> {
    return this.http.delete<CompradorDetail>(API_URL + compradores + '/' + compradorId);
}

}
