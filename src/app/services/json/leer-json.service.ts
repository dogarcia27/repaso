/*
 * Dorkaitz García Martínez
 * Birt - DAM - Desarrollo de interfaces (2024-2025)
 * Tarea de evaluación 0301
 * 
 * Servicio creado para facilitar cambios: Me parecía interesante separar el servicio
 * que controla la importación de los datos iniciales del servicio que controla las
 * noticias que queremos leer
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

// Servicio que recibe los datos de un Json y proporciona un array al resto de elementos de la app
export class LeerJsonService {

  // Array para almacenar los artículos recibidos
  private listaNoticias: IArticulo[] = [];

  /**
   * Constructor de la clase
   * @param leerFichero - Servicio HttpClient para realizar peticiones HTTP.
   */
  constructor(private leerFichero: HttpClient) {
    this.getDatosFichero();
  }

  /**
  * Método para obtener los datos iniciales desde archivo JSON
  * @returns void
  */
  getDatosFichero() {
    let datosFichero: Observable<RespuestaNoticias>;
    datosFichero = this.leerFichero.get<RespuestaNoticias>("/../assets/datos/articulos.json");
    datosFichero.subscribe(datos => {
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
