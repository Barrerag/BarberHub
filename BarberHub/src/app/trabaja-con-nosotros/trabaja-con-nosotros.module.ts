import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrabajaConNosotrosPageRoutingModule } from './trabaja-con-nosotros-routing.module';

import { TrabajaConNosotrosPage } from './trabaja-con-nosotros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrabajaConNosotrosPageRoutingModule
  ],
  declarations: [TrabajaConNosotrosPage]
})
export class TrabajaConNosotrosPageModule {}
