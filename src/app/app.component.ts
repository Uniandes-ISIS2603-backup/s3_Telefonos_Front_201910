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
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "CambiaPhone";
        this.authService.start();
    }

    /**
     * @ignore
     */
    constructor(private authService: AuthService,
        private compradorService: CompradorService,
        private proveedorService: ProveedorService) { }

    logout(): void {
        this.authService.logout()
    }

}





