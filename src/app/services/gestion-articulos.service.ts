/*
 * Dorkaitz García Martínez
 * Birt - DAM - Desarrollo de interfaces (2024-2025)
 * Tarea de evaluación 0301
 * 
 * Servicio creado para acceder al array de articulos que queremos leer
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IArticulo } from 'src/app/interfaces/iarticulo';
import { StoreManagerService } from './storage-manager.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para controlar y acceder al array de articulos que queremos leer en tab2
 */
export class GestionArticulosService {

  private listaLectura: IArticulo[] = [];
  private listaLecturaSub$ = new BehaviorSubject<IArticulo[]>([]);
  private listaLecturaObs$ = this.listaLecturaSub$.asObservable(); 

  constructor(private storMan: StoreManagerService) {
    (async () => {
      const lista = await this.storMan.getObject('lista');
      this.listaLectura = lista || [];
      this.listaLecturaSub$.next(this.listaLectura);
    })();
  }

  /**
   * Método para obtener un observable desde el resto de componentes
   * @returns listaLecturaObs$ - Observable para poder suscribirse al array de articulos
   */
  getListaLecturaObservable() {
    return this.listaLecturaObs$;
  }

  /**
   * Método que recibe un artículo, lo añade o elimina del array de artículos y actualiza el valor del observable
   * @param article - articulo a añadir o eliminar
   */
  actualizarListaLectura(article: IArticulo) {
    
    const index = this.buscarIndice(article);
    // Si el articulo no está se añade al array, en caso contrario se elimina del array
    if (index == -1){
      this.listaLectura.push(article);
    } else {
      this.listaLectura.splice(index, 1);
    }
    // actualizamos el valor del subject y storMan
    this.storMan.setObject('lista', this.listaLectura);
    this.listaLecturaSub$.next(this.listaLectura);
  }

  /**
   * Método para buscar el índice de un artículo en el array listaLectura
   * @param article - articulo a buscar en el array
   * @returns number - indice del articulo en el array (-1 si no está)
   */
  buscarIndice(article: IArticulo) {
    return this.listaLectura.findIndex(a => a.title === article.title);
  }

}
