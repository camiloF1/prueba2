import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'iniciarSesion',
    loadChildren: () => import('./usuarios/iniciar-sesion/iniciar-sesion-routing.module').then( m => m.IniciarSesionPageRoutingModule)
  },
  {
    path: '',
    redirectTo: 'iniciarSesion',
    pathMatch: 'full'
  },
  {
    path: 'aniadir-carrito',
    loadChildren: () => import('./carrito/aniadir-carrito/aniadir-carrito.module').then( m => m.AniadirCarritoPageModule)
  },
  {
    path: 'detallar-carrito',
    loadChildren: () => import('./carrito/detallar-carrito/detallar-carrito.module').then( m => m.DetallarCarritoPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
