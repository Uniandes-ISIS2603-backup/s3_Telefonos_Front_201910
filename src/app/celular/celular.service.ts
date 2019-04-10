import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http"; 
import {Celular} from './celular';
import {CelularDetail} from './celular-detail';
import {Observable} from 'rxjs';

const API_URL = "../../assets/";
const celulares = 'celulares.json';

@Injectable()
export class CelularService{

    constructor (private http: HttpClient){ }

    getCelulares(): Observable<Celular[]>{
        return this.http.get<Celular[]>(API_URL+celulares);
    }

    getCelularDetail(imei:string): Observable<CelularDetail>{
        return this.http.get<CelularDetail>(API_URL+'celulares-'+imei+'.json');
    }
}