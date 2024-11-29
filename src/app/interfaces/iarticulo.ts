/*
 * Dorkaitz García Martínez
 * Birt - DAM - Desarrollo de interfaces (2024-2025)
 * Tarea de evaluación 0301
 * 
 * Interfaz que tendrá cada elemento de los arrays IArticulo[] que usaremos.
 * En principio no son necesarias todas las propiedades, pero como podríamos querer
 * añadir funcionalidades me parece interesante dejarlas.
 */

export interface ISource {
    name: string
}

export interface IArticulo {
    source: ISource,
    title: string,
    description?: string,
    url?: string,
    urlToImage?: string
}
