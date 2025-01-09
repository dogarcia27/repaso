/*
 * Dorkaitz García Martínez
 * Birt - DAM - Desarrollo de interfaces (2024-2025)
 * Tarea de evaluación 0302
 * 
 * Servicio creado para comunicarse con la API
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticulo } from 'src/app/interfaces/iarticulo';

// Interfaz de la respuesta que esperamos obtener
export interface RespuestaNoticias {
  status: string,
  totalResults: number,
  articles: IArticulo[]
}

@Injectable({
  providedIn: 'root'
})

// Servicio que se comunica con la API y proporciona un array al resto de elementos de la app
export class ApiRestService {

  // variables para construir la url dinamica
  private apiKey: string = '3c525bbc7f144d2684ac29d40679f262';
  private category: string = 'business';   // business por defecto, AÑADIR QUE PUEDA CAMBIAR DE VALOR
  private country: string = 'us';
  private url: string = `https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.apiKey}`;
  
  // Array para almacenar los artículos recibidos
  private listaNoticias: IArticulo[] = [];

  /**
   * Constructor de la clase
   * @param apiRest - Servicio HttpClient para realizar peticiones HTTP.
   */
  constructor(private apiRest: HttpClient) {
    this.getDatos();
  }

  /**
  * Método para obtener los datos iniciales desde archivo JSON
  * @returns void
  */
  getDatos() {
    let datosApi: Observable<RespuestaNoticias>;
    datosApi = this.apiRest.get<RespuestaNoticias>(this.url);
    datosApi.subscribe(datos => {
      // Añadir los datos (artículos) recibidos al array listaNoticias
      this.listaNoticias.push(...datos.articles);
    });
  }

  /**
   * Método para que el resto de elementos reciba el array listaNoticias
   * @returns listaNoticias - array de artículos
   */
  getListaNoticias() {
    return this.listaNoticias;
  }
  
}