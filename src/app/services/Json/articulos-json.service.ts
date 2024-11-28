import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticulo } from 'src/app/interfaces/iarticulo';

@Injectable({
  providedIn: 'root'
})

export interface RespuestaNoticias {
  status: string,
  totalResults: number,
  articles: IArticulo[]
}

export class ArticulosJsonService {

  private listaNoticias!: IArticulo[];

  constructor(private leerFichero: HttpClient) {
    this.getDatosFichero();
   }

  getDatosFichero() {
    let datosFichero: Observable<RespuestaNoticias>;
    datosFichero = this.leerFichero.get<RespuestaNoticias>("/../assets/datos/articulos.json");
    datosFichero.subscribe(datos => {
      console.log(datos);
      //this.listaNoticias = datos.articles;
    });
  }

  getListaNoticias() {
    return this.listaNoticias;
  }
}
