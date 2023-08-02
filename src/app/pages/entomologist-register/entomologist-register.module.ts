import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntomologistRegisterPageRoutingModule } from './entomologist-register-routing.module';

import { EntomologistRegisterPage } from './entomologist-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntomologistRegisterPageRoutingModule
  ],
  declarations: [EntomologistRegisterPage]
})
export class EntomologistRegisterPageModule {}
