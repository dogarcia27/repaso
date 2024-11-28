import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponentComponent } from './card-component/card-component.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ CardComponentComponent ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CardComponentComponent
  ]
})
export class ComponentsModule { }
