import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { CompradorListComponent } from '../comprador/comprador-list/comprador-list.component';
import { ProveedorListComponent } from '../proveeedor/proveedor-list/proveedor-list.component';
import { CompradorCreateComponent } from '../comprador/comprador-create/comprador-create.component';
import { FacturaListComponent } from '../factura/factura-list/factura-list.component';
import { TabletListComponent } from '../tablet/tablet-list/tablet-list.component';
import { TabletCrearComponent } from '../tablet/tablet-crear/tablet-crear.component';
import { TabletDetailComponent } from '../tablet/tablet-detail/tablet-detail.component';
import { ListadedeseosListComponent } from '../listadedeseos/listadedeseos-list/listadedeseos-list.component';
import { ListadedeseosCrearComponent } from '../listadedeseos/listadedeseos-crear/listadedeseos-crear.component';
import { ListadedeseosDetailComponent } from '../listadedeseos/listadedeseos-detail/listadedeseos-detail.component';
import { CelularCreateComponent } from '../celular/celular-create/celular-create.component';
import { CelularListComponent } from '../celular/celular-list/celular-list.component';
import { CelularDetailComponent } from '../celular/celular-detail/celular-detail.component';
import { CarritoDeComprasCreateComponent } from '../carrito-de-compras/carrito-de-compras-create/carrito-de-compras-create.component';
import { CarritoDeComprasListComponent } from '../carrito-de-compras/carrito-de-compras-list/carrito-de-compras-list.component';
import { CarritoDeComprasDetailComponent } from '../carrito-de-compras/carrito-de-compras-detail/carrito-de-compras-detail.component';

const routes: Routes = [
    {
        path: 'celulares',
        children:[
            {
                path: 'add',
                component: CelularCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
            path: 'list',
            component: CelularListComponent
        },
        {
            path:':imei',
            component: CelularDetailComponent
        }
        ]
    },
    {
        path: 'carritoDeCompras',
        children:[
        {
                path: 'add',
                component:CarritoDeComprasCreateComponent,
                runGuardsAndResolvers: 'always'
        },
        {
            path: 'list',
            component:CarritoDeComprasListComponent
        },
        {
            path: ':id',
            component: CarritoDeComprasDetailComponent
        }
        ]
    },{
        path: 'facturas',
        children: [
            {
                path: 'list',
                component: FacturaListComponent
            }
        ]
    },
    {
        path: 'compradores',
        children: [
            {
                path: 'list',
                component: CompradorListComponent
            },
            {
                path: 'add',
                component: CompradorCreateComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'proveedores',
        children: [
            {
                path: 'list',
                component: ProveedorListComponent
            }
        ]
    },
    {
        path: 'tablets',
        children:[{
            path: 'list',
            component:TabletListComponent
        },
        {
            path: 'add',
            component: TabletCrearComponent,
            runGuardsAndResolvers: 'always'
        },{
            path:':referencia',
            component: TabletDetailComponent
        }
        ]
    },
    {
        path: 'listasDeDeseos',
        children:[{
            path: 'list',
            component:ListadedeseosListComponent
        },
        {
            path: 'add',
            component: ListadedeseosCrearComponent
        },
        {
            path: ':id',
            component: ListadedeseosDetailComponent
        }
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: CelularListComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
