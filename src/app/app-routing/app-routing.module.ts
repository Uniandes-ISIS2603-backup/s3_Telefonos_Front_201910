import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { CelularListComponent } from '../celular/celular-list/celular-list.component';
import { CelularDetailComponent } from '../celular/celular-detail/celular-detail.component';
import { CarritoDeComprasListComponent } from '../carrito-de-compras/carrito-de-compras-list/carrito-de-compras-list.component';
import { CarritoDeComprasDetailComponent } from '../carrito-de-compras/carrito-de-compras-detail/carrito-de-compras-detail.component';

const routes: Routes = [

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
        component: AuthLoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    },
    {
        path: 'celulares',
        children:[{
            path: 'list',
            component:CelularListComponent
        },
        {
            path:':referencia',
            component: CelularDetailComponent
        }
        ]
    },
    {
        path: 'carritoDeCompras',
        children:[{
            path: 'list',
            component:CarritoDeComprasListComponent
        },
        {
            path: ':id',
            component: CarritoDeComprasDetailComponent
        }
        ]
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
