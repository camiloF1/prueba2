import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallarCarritoPageRoutingModule } from './detallar-carrito-routing.module';

import { DetallarCarritoPage } from './detallar-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallarCarritoPageRoutingModule
  ],
  declarations: [DetallarCarritoPage]
})
export class DetallarCarritoPageModule {}
