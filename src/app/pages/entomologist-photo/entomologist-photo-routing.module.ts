import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntomologistPhotoPage } from './entomologist-photo.page';

const routes: Routes = [
  {
    path: '',
    component: EntomologistPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntomologistPhotoPageRoutingModule {}
