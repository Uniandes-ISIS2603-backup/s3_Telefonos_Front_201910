import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http"; 
import {Celular} from './celular';
import {CelularDetail} from './celular-detail';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const celulares = '/celulares';

@Injectable()
export class CelularService{
    /**
     * Constructor por default
     * @param http, conexion de manejos de protocolos HTTP
     */
    constructor (private http: HttpClient){ }

    /**
     * Método que retorna una lista de observables de celulares
     * return Observable<Celular[]>, lista de celulares en la app
     */
    getCelulares(): Observable<Celular[]>{
        return this.http.get<Celular[]>(API_URL+celulares);
    }
    /**
     * Método que retorna un observable de tipo celular detail
     * @param imei, imei del celular que se quiere obtener
     */
    getCelularDetail(imei:number): Observable<CelularDetail>{
        return this.http.get<CelularDetail>(API_URL+'celulares-'+imei+'.json');
    }

    /**
    * Creates a new Celular
    * @param celular The new celular
    * @returns The book with its new id if it was created, false if it wasn't
    */
   createCelular(celular): Observable<CelularDetail> {
    return this.http.post<CelularDetail>(API_URL + celulares, celular);
}

}