import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TabletService } from '../tablet.service';
import { ToastrService } from 'ngx-toastr';
import { Tablet } from '../tablet';

@Component({
  selector: 'app-tablet-crear',
  templateUrl: './tablet-crear.component.html',
  styleUrls: ['./tablet-crear.component.css']
})
export class TabletCrearComponent implements OnInit {

  constructor(
    private tabletService: TabletService,
    private toastrService: ToastrService
  ) { }

  tablet: Tablet;


  /**
    * The output which tells the parent component
    * that the user no longer wants to create a tablet
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new tablet
    */
    @Output() create = new EventEmitter();

    /**
    * Crea una tablet
    */
    createTablet
    (): Tablet
     {
        console.log(this.tablet);
        this.tabletService.createTablet(this.tablet).subscribe((e) => {
                this.tablet = e;
                this.create.emit();
                this.toastrService.success("La tablet fue creada", "Creacion tablet");
                
            });
            return this.tablet;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create a tablet
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
      
        this.tablet = new Tablet();
}

}
