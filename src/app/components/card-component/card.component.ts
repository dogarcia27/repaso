import { GestionArticulosService } from './../../services/gestion-articulos.service';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { IArticulo } from 'src/app/interfaces/iarticulo';

@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent  {

  @Input() articulo!: IArticulo;

  constructor(private gestorNoticias: GestionArticulosService, private alerta: AlertController, private modal: ModalController) { }

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
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Borrar',
          handler: () => {
            console.log();
            this.gestorNoticias.actualizarListaLectura(this.articulo);
          },
        },
      ],
    });

    await alert.present();
  }

}
