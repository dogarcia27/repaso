import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticulo } from 'src/app/interfaces/iarticulo';

export interface RespuestaNoticias {
  status: string,
  totalResults: number,
  articles: IArticulo[]
}

@Injectable({
  providedIn: 'root'
})

export class GestionArticulosService {

  private listaNoticias: IArticulo[] = [];

  constructor(private leerFichero: HttpClient) {
    this.getDatosFichero();
   }

  getDatosFichero() {
    let datosFichero: Observable<RespuestaNoticias>;
    datosFichero = this.leerFichero.get<RespuestaNoticias>("/../assets/datos/articulos.json");
    datosFichero.subscribe(datos => {
      console.log(datos);
      this.listaNoticias.push(...datos.articles);
    });
  }

  getListaNoticias() {
    return this.listaNoticias;
  }

}
