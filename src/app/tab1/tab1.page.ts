import { Component, OnInit } from '@angular/core';
import { IArticulo } from '../interfaces/iarticulo';
import { GestionArticulosService } from '../services/gestion-articulos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // Array para pruebas
  arrayPrueba: string[] = [
    "esto es un array de pruebas",
    "elemento 1 del array",
    "elemento 2 del array"
  ]
  // Array inicial de noticias
  listaNoticias!: IArticulo[];

  constructor(public gestionArticulos: GestionArticulosService) {}

    ngOnInit() {
      this.listaNoticias = this.gestionArticulos.getListaNoticias();
  }
}
