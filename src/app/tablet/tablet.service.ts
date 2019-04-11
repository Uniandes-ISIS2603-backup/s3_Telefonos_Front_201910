import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http"; 
import {Tablet} from './tablet';
import {TabletDetail} from './tablet-detail';
import {Observable} from 'rxjs';

//const API_URL = "../../assets/";
//const tablets = 'tablets.json';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const tablets = '/tablets';

/**
* Servicio proveedor de todo lo relacionado con tablets
*/
@Injectable({
    providedIn: 'root'
  })
export class TabletService{

    /**
    * Constructor del servicio
    * @param http El HttpClient - Es necesario para desarrollar los request
    */
    constructor (private http: HttpClient){ }

    /**
    * Devuleve el objeto Observable que contiene la lista de tablets obtenidos del API
    * @returns La lista de tablets en tiempo real 
    */
    getTablets(): Observable<Tablet[]>{
        return this.http.get<Tablet[]>(API_URL+tablets);
    }

    /**
    * Retorna el objeto observable con los detalles de una tablet obtenido del API
    * @returns Los detalles de la tablet
    */
    getTabletDetail(referenciaTablet): Observable<TabletDetail>{
        return this.http.get<TabletDetail>(`${API_URL}${tablets}/${referenciaTablet}`);
    }

    createTablet(tablet):Observable<Tablet>{
        return this.http.post<Tablet>(API_URL+tablets, tablet);
    }
}