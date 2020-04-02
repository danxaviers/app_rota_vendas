import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginComponentRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginComponentRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginComponentModule {}
