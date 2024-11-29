import { Component, Input, OnInit } from '@angular/core';
import { IArticulo } from 'src/app/interfaces/iarticulo';

@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent  {

  @Input() articulo!: IArticulo;

  constructor() { }

  alertaBorrado() {
    
  }
}
