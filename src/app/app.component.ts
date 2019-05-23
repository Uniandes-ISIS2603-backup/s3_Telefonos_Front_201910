import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Comprador } from './comprador/comprador';
import { Proveedor } from './proveeedor/proveedor';
import { CompradorService } from './comprador/comprador.service';
import { ProveedorService } from './proveeedor/proveedor.service';

/**
 * The app component. This component is the base of s3_Telefonos-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    /**
     * El comprador que inicia sesion
     */
    selectedComprador: Comprador;


    /**
     * El proveedor que inicia sesion
     */
    selectedProveedor: Proveedor;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "CambiaPhone";
        this.authService.start();
    }

    profile():void{
        if(localStorage.getItem('role')=='Comprador'){ 
            this.selectedComprador=this.authService.getComprador();
        }
        else if(localStorage.getItem('role')=='Proveedor'){ 
            this.selectedProveedor=this.authService.getProveedor();
        }
    }

    /**
     * @ignore
     */
    constructor(private authService: AuthService) { }

    logout(): void {
        this.authService.logout();
    }

}





