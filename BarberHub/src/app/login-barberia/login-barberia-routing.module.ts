import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginBarberiaPage } from './login-barberia.page';

const routes: Routes = [
  {
    path: '',
    component: LoginBarberiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginBarberiaPageRoutingModule {}
