import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedBPageRoutingModule } from './selected-b-routing.module';

import { SelectedBPage } from './selected-b.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedBPageRoutingModule
  ],
  declarations: [SelectedBPage]
})
export class SelectedBPageModule {}
