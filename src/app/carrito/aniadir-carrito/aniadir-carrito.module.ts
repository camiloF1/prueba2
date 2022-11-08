import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AniadirCarritoPageRoutingModule } from './aniadir-carrito-routing.module';

import { AniadirCarritoPage } from './aniadir-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AniadirCarritoPageRoutingModule
  ],
  declarations: [AniadirCarritoPage]
})
export class AniadirCarritoPageModule {}
