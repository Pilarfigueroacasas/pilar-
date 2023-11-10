import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnclasePage } from './enclase.page';

const routes: Routes = [
  {
    path: '',
    component: EnclasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnclasePageRoutingModule {}
