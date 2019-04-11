import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FacturaService } from '../factura.service';
import { ToastrService } from 'ngx-toastr';
import { Factura } from '../factura';
import { Comprador } from '../../comprador/comprador';
import { CompradorService } from '../../comprador/comprador.service';
import { ProveedorService } from '../../proveeedor/proveedor.service';
import { Proveedor } from '../../proveeedor/proveedor';

@Component({
  selector: 'app-factura-create',
  templateUrl: './factura-create.component.html',
  styleUrls: ['./factura-create.component.css']
})
export class FacturaCreateComponent implements OnInit {

  /**
   * El constructor del componente
   * @param facturaService Proveedor del servicio de factura
   * @param toastrService El toastr para mostrar mensajes al usuario
   */
  constructor(
    private facturaService: FacturaService,
    private compradorService: CompradorService,
    private proveedorService: ProveedorService,
    private toastrService: ToastrService
  ) { }

  /** 
   * Nueva factura
   */
  factura: Factura;

  /**
    * Lista de compradores en CambiaPhone
    */
   compradores: Comprador[];

   /**
    * Lista de proveedores en CambiaPhone
    */
   proveedores: Proveedor[];


  /**
    * La salida que le indica al componente padre
    * que el usuario no quiere crear una factura
    */
    @Output() cancel = new EventEmitter();

    /**
    * La salida que le indica al componente padre
    * que el usuario quiere crear una factura
    */
    @Output() create = new EventEmitter();

    /**
    * Crea una factura
    */
    createFactura
    (): Factura
     {
        console.log(this.factura);
        this.facturaService.createFactura(this.factura).subscribe((factura) => {
                this.factura = factura;
                this.create.emit();
                this.toastrService.success("La factura fue creada", "Factura creation");
                
            });
            return this.factura;
    }

    /**
    * Emite la senial para indicar al componente padre que
    *el usuario no quiere crear una factura
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * Obtiene la lista de compradores de CambiaPhone
    */
   getCompradores(): void {
    this.compradorService.getCompradores()
        .subscribe(compradores => {
            this.compradores = compradores;
        }, err => {
            this.toastrService.error(err, 'Error');
        });
}

/**
    * Obtiene la lista de proveedores de CambiaPhone
    */
   getProveedores(): void {
    this.proveedorService.getProveedores()
        .subscribe(proveedores => {
            this.proveedores = proveedores;
        }, err => {
            this.toastrService.error(err, 'Error');
        });
}


    /**
    * La funcion que inicializa el componente
    */
    ngOnInit() {
        this.factura = new Factura ();
        this.factura.comprador = new Comprador();
        this.factura.proveedor = new Proveedor();
        this.getCompradores();
        this.getProveedores();
    }

} 
