import { Injectable } from '@angular/core';
import { ListaDeDeseos } from './listaDeDeseos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaDeDeseosDetail } from './listadedeseos-detail';



import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const LISTAS = '/listasDeDeseos';


@Injectable({
  providedIn: 'root'
})
export class ListaDeDeseosService {

  constructor (private http: HttpClient){ }

    getListasDeDeseos(): Observable<ListaDeDeseos[]>{
        return this.http.get<ListaDeDeseos[]>(API_URL+LISTAS);
    }

    getListaDeDeseosDetail(idLista): Observable<ListaDeDeseosDetail>{
      return this.http.get<ListaDeDeseosDetail>(API_URL+LISTAS+"/"+idLista);
    }

    createListaDeDeseos(lista):Observable<ListaDeDeseos>{
      return this.http.post<ListaDeDeseos>(API_URL+LISTAS, lista);
  }
}
