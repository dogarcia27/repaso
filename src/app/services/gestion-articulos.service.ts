import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IArticulo } from 'src/app/interfaces/iarticulo';

@Injectable({
  providedIn: 'root'
})

export class GestionArticulosService {

  private listaLectura: IArticulo[] = [];
  private listaLecturaSub$ = new Subject<IArticulo[]>();
  private listaLecturaObs$ = this.listaLecturaSub$.asObservable(); 

  constructor() {
    
  }

  actualizarListaLectura(article: IArticulo) {
    
    let observableListaLectura: Observable<IArticulo[]>;
    // buscar el articulo en la lista
    const index = this.buscarIndice(article);
    // si no está lo añade, si está lo borra
    if (index == -1){
      this.listaLectura.push(article);
    } else {
      this.listaLectura.splice(index, 1);
    }
    // actualizamos el valor del subject
    this.listaLecturaSub$.next(this.listaLectura);
  }

  // lo buscamos con el valor de title porque nunca es nulo y entiendo que será único
  buscarIndice(article: IArticulo) {
    return this.listaLectura.findIndex(a => a.title === article.title);
  }

  getListaLecturaObservable() {
    return this.listaLecturaObs$;
  }
}
