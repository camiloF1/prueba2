import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AniadirCarritoPage } from './aniadir-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: AniadirCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AniadirCarritoPageRoutingModule {}
