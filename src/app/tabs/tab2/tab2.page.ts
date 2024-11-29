/*
 * Dorkaitz García Martínez
 * Birt - DAM - Desarrollo de interfaces (2024-2025)
 * Tarea de evaluación 0301
 * 
 * Tab en la que se muestran las noticias que hemos seleccionado para leer
 */

import { Component, OnInit } from '@angular/core';
import { GestionArticulosService } from '../../services/gestion-articulos.service';
import { IArticulo } from '../../interfaces/iarticulo';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

/**
 * Página en la que vemos las noticias que hemos seleccionado
 */
export class Tab2Page implements OnInit {

  listaLectura: IArticulo[] = [];

  /**
   * Constructor de la clase
   * @param gestorArticulos - Servicio que gestiona las noticias que queremos leer
   */
  constructor(public gestorArticulos: GestionArticulosService) {}

  /**
   * Método que se ejecuta al inicializarse la vista
   * @returns void
   */
  ngOnInit(): void {
    this.gestorArticulos.getListaLecturaObservable().subscribe(data => {
      this.listaLectura = data;
    });
  }
}
