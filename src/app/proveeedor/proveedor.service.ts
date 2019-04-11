import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../environments/environment';
import { Proveedor } from './proveedor';
import { ProveedorDetail } from './proveedor-detail';
const API_URL = environment.apiURL;
const proveedores = '/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  /**
    * Constructor del servicio
    * @param http El HttpClient - Es necesario para desarrollar los request
    */
  constructor(private http: HttpClient) { }

  /**
    * Devuleve el objeto Observable que contiene la lista de proveedores obtenidos del API
    * @returns La lista de proveedores en tiempo real 
    */
  getProveedores():Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(API_URL+proveedores);
  }

  /**
    * Retorna el objeto observable con los detalles de un proveedor obtenido del API
    * @returns Los detalles del proveedor
    * getCompradorDetail(compradorId): Observable<CompradorDetail> {
    return this.http.get<CompradorDetail>(`${API_URL}${compradores}/${compradorId}`);
    */
  getProveedorDetail(proveedorId):Observable<ProveedorDetail>{
    return this.http.get<ProveedorDetail>(`${API_URL}${proveedores}/${proveedorId}`);
  }

  /**
    * Crea un proveedor
    * @param proveedor El nuevo proveedor
    * @returns La confirmacion de que el proveedor fue creado
    */
   createProveedor(proveedor):Observable<Proveedor>{
    return this.http.post<Proveedor>(API_URL+proveedores, proveedor);
  } 

  }
