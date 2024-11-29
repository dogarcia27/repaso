/*
 * Dorkaitz García Martínez
 * Birt - DAM - Desarrollo de interfaces (2024-2025)
 * Tarea de evaluación 0301
 * 
 * Módulo para controlar los componentes que se vayan necesitando
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card-component/card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ CardComponent ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CardComponent
  ]
})

export class ComponentsModule { }
