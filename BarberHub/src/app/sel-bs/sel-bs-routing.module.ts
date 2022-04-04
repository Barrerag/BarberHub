import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelBsPage } from './sel-bs.page';

const routes: Routes = [
  {
    path: '',
    component: SelBsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelBsPageRoutingModule {}
