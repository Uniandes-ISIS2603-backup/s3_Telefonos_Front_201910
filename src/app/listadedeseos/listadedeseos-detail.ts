import { ListaDeDeseos } from "./listaDeDeseos";
import { Tablet } from "../tablet/tablet";
import { Celular } from "../celular/celular";

export class ListaDeDeseosDetail extends ListaDeDeseos{

    celulares: Celular[];

    tablets:Tablet[];

}