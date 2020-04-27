import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesComponentRoutingModule } from './sales-routing.module';

import { SalesComponent } from './sales.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesComponentRoutingModule
  ],
  declarations: [SalesComponent]
})
export class SalesComponentModule {}
