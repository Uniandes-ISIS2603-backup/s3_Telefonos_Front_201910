import { Component, OnInit } from '@angular/core';
import { CarritoDeComprasService } from '../carrito-de-compras.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CarritoDeCompras } from '../carritoDeCompras';

@Component({
  selector: 'app-carrito-de-compras-create',
  templateUrl: './carrito-de-compras-create.component.html',
  styleUrls: ['./carrito-de-compras-create.component.css']
})
export class CarritoDeComprasCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param cService The books' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
   constructor(
    private cService: CarritoDeComprasService,
    private toastrService: ToastrService,
    private router: Router
) {}

/**
* The new carrito
*/
carrito: CarritoDeCompras;


/**
* Cancels the creation of the new book
* Redirects to the books' list page
*/
cancelCreation(): void {
    this.toastrService.warning('The book wasn\'t created', 'Book creation');
    this.router.navigate(['/books/list']);
}

/**
* Creates a new book
*/
createCarrito(): CarritoDeCompras {
    this.cService.createCarrito(this.carrito)
        .subscribe(carrito => {
            this.carrito.id = carrito.id;
            this.router.navigate(['/carritosDeCompras/' + carrito.id]);
        }, err => {
            this.toastrService.error(err, 'Error');
        });
    return this.carrito;
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.carrito = new CarritoDeCompras();
}
}
