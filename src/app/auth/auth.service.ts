import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions'
import 'rxjs/add/operator/catch';
import { CompradorService } from '../comprador/comprador.service';
import { ProveedorService } from '../proveeedor/proveedor.service';
import { Comprador } from '../comprador/comprador';
import { Proveedor } from '../proveeedor/proveedor';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {
    /**
     * Rol del usuario que inicio sesion
     */
    role: String;

    /**
     * Usuario
     */
    username: String;

    /**
     * Comprador seleccionado
     */
    selectedComprador: Comprador;

    /**
     * Proveedor seleccionado
     */
    selectedProveedor: Proveedor;



    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor(private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService,
        private compradorService: CompradorService, private proveedorService: ProveedorService) { }

    start(): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review']);
        const role = localStorage.getItem('role');
        if (!role) {
            this.setGuestRole();
        } else if (role === 'ADMIN') {
            this.setAdministratorRole();
        } else if (role === 'COMP') {
            this.setCompradorRole();
        }
        else {
            this.setProveedorRole();
        }
    }

    setGuestRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setCompradorRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('COMP', ['']);
        localStorage.setItem('role', 'COMP');
    }

    setProveedorRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('PROV', ['']);
        localStorage.setItem('role', 'PROV');
    }

    setAdministratorRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['']);
        localStorage.setItem('role', 'ADMIN');
    }

    printRole(): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     * @param name The desired username to set to the user
     */
    login(role, name): void {
        if (role === 'Administrador') {
            this.setAdministratorRole();
        } else if (role === 'Comprador') {
            this.setCompradorRole();
        } else {
            this.setProveedorRole()
        }
        console.log(role);
        localStorage.setItem('username', name);
        console.log('--' + localStorage.getItem('username'));
        this.role = role;
        this.username = name;
        this.router.navigateByUrl('/');
        this.onSelected();

    }

    /**
     * Encuentra el usuario
     */
    onSelected(): void {
        if (this.role === 'Comprador') {
            this.compradorService.getCompradorDetailByUsername(this.username)
                .subscribe(selectedComprador => {
                    this.selectedComprador = selectedComprador;
                    console.log(this.selectedComprador);

                });
                localStorage.setItem('idComprador', this.selectedComprador.id+"");
        }
        else if (this.role === 'Proveedor') {
            this.proveedorService.getProveedorDetailByUsername(this.username)
                .subscribe(selectedProveedor => {
                    this.selectedProveedor = selectedProveedor;
                    console.log(this.selectedProveedor);

                });
        }
    }

    /**
     * Retorna el proveedor
     */
    getProveedor(): Proveedor {
        return this.selectedProveedor;
    }


    /**
     * Retorna el comprador
     */
    getComprador(): Comprador {
        return this.selectedComprador;
    }

    /**
     * Logs the user out
     */
    logout(): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
    }
}
