import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntomologistPhotoPageRoutingModule } from './entomologist-photo-routing.module';

import { EntomologistPhotoPage } from './entomologist-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntomologistPhotoPageRoutingModule
  ],
  declarations: [EntomologistPhotoPage]
})
export class EntomologistPhotoPageModule {}
