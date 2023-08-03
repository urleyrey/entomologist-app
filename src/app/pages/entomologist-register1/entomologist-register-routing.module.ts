import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntomologistRegisterPage } from './entomologist-register.page';

const routes: Routes = [
  {
    path: '',
    component: EntomologistRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntomologistRegisterPageRoutingModule {}
