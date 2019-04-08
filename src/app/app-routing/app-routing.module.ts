import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { TabletListComponent } from '../tablet/tablet-list/tablet-list.component';
import {TabletDetailComponent} from '../tablet/tablet-detail/tablet-detail.component';
import { ListadedeseosListComponent } from '../listadedeseos/listadedeseos-list/listadedeseos-list.component';
import { ListadedeseosDetailComponent } from '../listadedeseos/listadedeseos-detail/listadedeseos-detail.component';

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
        path: 'tablets',
        children:[{
            path: 'list',
            component:TabletListComponent
        },
        {
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
            path: ':id',
            component: ListadedeseosDetailComponent
        }
        ]
    },
    {
        path: '**',
        redirectTo: 'home',
    }
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
