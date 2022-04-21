import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-pass',
    loadChildren: () => import('./forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule)
  },
  {
    path: 'trabaja-con-nosotros',
    loadChildren: () => import('./trabaja-con-nosotros/trabaja-con-nosotros.module').then( m => m.TrabajaConNosotrosPageModule)
  },
  {
    path: 'sel-bs',
    loadChildren: () => import('./sel-bs/sel-bs.module').then( m => m.SelBsPageModule)
  },
  {
    path: 'verificar-email',
    loadChildren: () => import('./verificar-email/verificar-email.module').then( m => m.VerificarEmailPageModule)
  },
  {
    path: 'login-barberia',
    loadChildren: () => import('./login-barberia/login-barberia.module').then( m => m.LoginBarberiaPageModule)
  },
  {
    path: 'selected-b',
    loadChildren: () => import('./selected-b/selected-b.module').then( m => m.SelectedBPageModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
