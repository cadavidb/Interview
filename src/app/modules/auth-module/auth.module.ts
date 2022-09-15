import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { CoreModule } from '../core-module/core.module';
import { LayoutsModule } from '../layouts-module/layouts.module';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    LayoutsModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule { }
