import { Component, OnInit } from '@angular/core';
import { GestionArticulosService } from '../services/gestion-articulos.service';
import { IArticulo } from '../interfaces/iarticulo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  // array para probar template
  arrayPrueba: number[] = [
    0, 1, 2, 3
  ];

  // array lista de noticias para leer
  listaLectura: IArticulo[] = []

  constructor(public gestorArticulos: GestionArticulosService) {}

  ngOnInit(): void {
    this.gestorArticulos.getListaLecturaObservable().subscribe(data => {
      this.listaLectura = data;
    });
  }
}
