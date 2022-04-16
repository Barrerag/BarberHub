import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginBarberiaPageRoutingModule } from './login-barberia-routing.module';

import { LoginBarberiaPage } from './login-barberia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginBarberiaPageRoutingModule
  ],
  declarations: [LoginBarberiaPage]
})
export class LoginBarberiaPageModule {}
