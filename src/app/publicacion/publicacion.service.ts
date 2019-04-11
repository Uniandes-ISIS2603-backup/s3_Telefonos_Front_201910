import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Publicacion } from './publicacion';
import { PublicacionDetail } from './publicacion-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const publicaciones = '/publicaciones';

/**
* Servicio proveedor de todo lo relacionado con publicaciones
*/
@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  /**
    * Constructor del servicio
    * @param http El HttpClient - Es necesario para desarrollar los request
    */
  constructor(private http: HttpClient) { }

  /**
    * Devuleve el objeto Observable que contiene la lista de publicaciones obtenidos del API
    * @returns La lista de publicaciones en tiempo real 
    */
   getPublicaciones(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(API_URL+publicaciones);
  }

  /**
    * Retorna el objeto observable con los detalles de una publicacion obtenido del API
    * @returns Los detalles de la publicacion
    */
   getPublicacionDetail(publicacionId): Observable<PublicacionDetail> {
    return this.http.get<PublicacionDetail>(`${API_URL}${publicaciones}/${publicacionId}`);
  }

  /**
    * Crea una publicacion
    * @param publicacion la nueva publicacion
    * @returns La confirmacion de que la publicacion fue creada
    */
  createPublicacion(publicacion):Observable<Publicacion>{
    return this.http.post<Publicacion>(API_URL+publicaciones, publicacion);
  }  

}
