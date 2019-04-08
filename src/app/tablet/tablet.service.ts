import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http"; 
import {Tablet} from './tablet';
import {TabletDetail} from './tablet-detail';
import {Observable} from 'rxjs';

const API_URL = "../../assets/";
const tablets = 'tablets.json';

@Injectable()
export class TabletService{

    constructor (private http: HttpClient){ }

    getTablets(): Observable<Tablet[]>{
        return this.http.get<Tablet[]>(API_URL+tablets);
    }

    getTabletDetail(referenciaTablet): Observable<TabletDetail>{
        return this.http.get<TabletDetail>(API_URL+'tablets-'+referenciaTablet+'.json');
    }
}