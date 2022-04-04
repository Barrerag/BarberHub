import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelBsPageRoutingModule } from './sel-bs-routing.module';

import { SelBsPage } from './sel-bs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelBsPageRoutingModule
  ],
  declarations: [SelBsPage]
})
export class SelBsPageModule {}
