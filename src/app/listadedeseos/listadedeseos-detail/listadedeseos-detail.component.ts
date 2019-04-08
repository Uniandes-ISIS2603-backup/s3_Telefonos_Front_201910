import { Component, OnInit } from '@angular/core';
import { ListaDeDeseosService } from '../lista-de-deseos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ListaDeDeseosDetail } from '../listadedeseos-detail';


@Component({
  selector: 'app-listadedeseos-detail',
  templateUrl: './listadedeseos-detail.component.html',
  styleUrls: ['./listadedeseos-detail.component.css']
})
export class ListadedeseosDetailComponent implements OnInit {

  constructor(private listaService:ListaDeDeseosService,
    private route: ActivatedRoute) { }

listaDetail:ListaDeDeseosDetail;

lista_id: number;

loader: any;

getListaDeDeseosDetail():void{
this.listaService.getListaDeDeseosDetail(this.lista_id).subscribe(e=>{this.listaDetail = e});
}
onLoad(params){
this.lista_id = params['id'];
console.log(" en detail " + this.lista_id);
this.listaDetail = new ListaDeDeseosDetail();
this.getListaDeDeseosDetail();
}

ngOnInit() {
this.loader = this.route.params.subscribe((params:Params) => this.onLoad(params));
}

ngOnDestroy(){
this.loader.unsubscribe();
}
}
