import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedBPage } from './selected-b.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedBPageRoutingModule {}
