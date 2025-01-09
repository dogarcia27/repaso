import { ApiRestService } from './../../services/api-rest.service';
/*
 * Dorkaitz García Martínez
 * Birt - DAM - Desarrollo de interfaces (2024-2025)
 * Tarea de evaluación 0301
 * 
 * Tab en la que se muestran todas las noticias obtenidas desde el exterior (JSON)
 */

import { GestionArticulosService } from '../../services/gestion-articulos.service';
import { Component, OnInit } from '@angular/core';
import { IArticulo } from '../../interfaces/iarticulo';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

/**
 * Página que muestra todas las noticias y en la que se puede seleccionar y desseleccionar las que queremos leer
 */
export class Tab1Page implements OnInit {

  listaNoticias!: IArticulo[];
  listaLectura!: IArticulo[];

  /**
   * Constructor de la clase
   * @param lectorJson - servicio de lectura de archivo externo
   * @param gestorArticulos - servicio que gestiona las noticias que queremos leer
   */
  constructor(private apiRest: ApiRestService, public gestorArticulos: GestionArticulosService) {}

  /**
   * Método que se ejecuta al inicializar el componente
   * @returns void
   */
    ngOnInit() {
      this.listaNoticias = this.apiRest.getListaNoticias();
    }

    /**
     * Método para añadir o quitar un artículo del array de lectura cada vez que cambie el valor del <ion-checkbox>
     * @param articulo - articulo para añadir o eliminar del array de noticias para leer
     * @returns void
     */
    actualizarNoticas(articulo: IArticulo) {
      this.gestorArticulos.actualizarListaLectura(articulo);
    }

    /**
     * Método para obtener el valor de la propiedad [checked] de <ion-checkbox> 
     * @param articulo - artículo a comprobar si está o no en el array de noticias para leer
     * @returns boolean - Valor que debe tener la propiedad [checked] de <ion-checkbox>
     */
    articuloEnArray(articulo: IArticulo) {
      return this.gestorArticulos.buscarIndice(articulo) != -1;
    }
}
