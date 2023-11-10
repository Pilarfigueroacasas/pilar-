import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnclasePageRoutingModule } from './enclase-routing.module';

import { EnclasePage } from './enclase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnclasePageRoutingModule
  ],
  declarations: [EnclasePage]
})
export class EnclasePageModule {}
