import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallarCarritoPage } from './detallar-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: DetallarCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallarCarritoPageRoutingModule {}
