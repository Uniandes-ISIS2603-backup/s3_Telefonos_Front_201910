import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CelularService } from '../celular.service';
import { Celular } from '../celular';

@Component({
  selector: 'app-celular-create',
  templateUrl: './celular-create.component.html',
  styleUrls: ['./celular-create.component.css']
})
export class CelularCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param cService The celulares services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
   constructor(
    private cService: CelularService,
    private toastrService: ToastrService,
    private router: Router) {}


    /**
     * El nuevo celular
     */
    celular: Celular;

    /**
    * Cancels the creation of the new celular
    * Redirects to the celular list page
    */
   cancelCreation(): void {
    this.toastrService.warning('El celular no fue creado', 'Creacion de celular');
    this.router.navigate(['/celulares/list']);
  }

  /**
    * Creates a new celular
    */
   createCelular(): Celular {
   
    this.cService.createCelular(this.celular)
        .subscribe(celular => {
            this.celular.imei = celular.imei;
            this.router.navigate(['/celulares/' + celular.id]);
        }, err => {
            this.toastrService.error(err, 'Error');
        });
    return this.celular;
}

    /**
    * This function will initialize the component
    */
   ngOnInit() {
    this.celular = new Celular();
}

}
