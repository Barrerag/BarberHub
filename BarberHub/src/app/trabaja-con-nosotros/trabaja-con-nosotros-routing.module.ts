import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabajaConNosotrosPage } from './trabaja-con-nosotros.page';

const routes: Routes = [
  {
    path: '',
    component: TrabajaConNosotrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabajaConNosotrosPageRoutingModule {}
