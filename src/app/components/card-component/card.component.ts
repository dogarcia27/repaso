/*
 * Dorkaitz García Martínez
 * Birt - DAM - Desarrollo de interfaces (2024-2025)
 * Tarea de evaluación 0301
 * 
 * Componente creado para controlar cada elemento de listaLectura (IArticulo[])
 */

import { GestionArticulosService } from './../../services/gestion-articulos.service';
import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IArticulo } from 'src/app/interfaces/iarticulo';

@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

/**
 * Componente que recibe un articulo y lo dibuja en un card
 */
export class CardComponent  {

  // Recibo cada artículo desde tabs2 y lo uso en el template
  @Input() articulo!: IArticulo;

  /**
   * Constructor de la clase
   * @param gestorNoticias - Servicio para controlar el array de articulos que queremos leer
   * @param alerta  - AlertController para crear alertas
   */
  constructor(private gestorNoticias: GestionArticulosService, private alerta: AlertController) { }

  /**
   * Método que previene a través de un alert que se eliminen artículos por error
   * @returns void
   */
  async alertaBorrado() {
    const alert = await this.alerta.create({
      header: 'Borrar noticia',
      message: '¿Desea borrar la noticia?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Se ha cancelado la eliminación del artículo
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Borrar',
          handler: () => {
            console.log("Noticia eliminada de listaLectura");
            // Una vez que se confirma la eliminación procedemos a ella
            this.gestorNoticias.actualizarListaLectura(this.articulo);
          },
        },
      ],
    });

    await alert.present();
  }

}
