import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListRoutingModule } from './product-list-routing.module';

import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListRoutingModule
  ],
  declarations: [ProductListComponent]
})
export class ProductListModule {}
