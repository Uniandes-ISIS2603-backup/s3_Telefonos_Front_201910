import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import { CompradorModule } from './comprador/comprador.module';
import { ProveeedorModule } from './proveeedor/proveeedor.module';
import { FacturaModule } from './factura/factura.module';
import { TabletModule } from './tablet/tablet.module';
import { ListadedeseosModule } from './listadedeseos/listadedeseos.module';
import { CelularModule } from './celular/celular.module';
import { CarritoDeComprasModule } from './carrito-de-compras/carrito-de-compras.module';
import { PublicacionModule}  from './publicacion/publicacion.module';
import { MetodoDePagoModule}  from './metodoDePago/metodoDePago.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CelularModule,
        CarritoDeComprasModule,
        TabletModule,
        ListadedeseosModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CompradorModule,
        ProveeedorModule,
        FacturaModule,
        PublicacionModule,
        MetodoDePagoModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
