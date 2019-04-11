import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http"; 
import {Celular} from './celular';
import {CelularDetail} from './celular-detail';
import {Observable} from 'rxjs';

const API_URL = "../../assets/";
const celulares = 'celulares.json';

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
}