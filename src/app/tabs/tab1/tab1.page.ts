import { GestionArticulosService } from '../../services/gestion-articulos.service';
import { Component, OnInit } from '@angular/core';
import { IArticulo } from '../../interfaces/iarticulo';
import { LeerJsonService } from '../../services/json/leer-json.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // Array inicial de noticias
  listaNoticias!: IArticulo[];
  listaLectura!: IArticulo[];

  constructor(public lectorJson: LeerJsonService, public gestorArticulos: GestionArticulosService) {}

    ngOnInit() {
      this.listaNoticias = this.lectorJson.getListaNoticias();
    }

    actualizarNoticas(articulo: IArticulo) { // ese parametro quizas haya que quitarlo
      this.gestorArticulos.actualizarListaLectura(articulo);
    }

    articuloEnArray(articulo: IArticulo) {
      return this.gestorArticulos.buscarIndice(articulo) != -1;
    }
}
