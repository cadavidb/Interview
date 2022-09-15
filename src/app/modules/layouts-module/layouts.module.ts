import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRegisterComponent } from './components/header-register/header-register.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { HeaderBenefitsComponent } from './components/header-benefits/header-benefits.component';
import { CoreModule } from '../core-module/core.module';





@NgModule({
  declarations: [
    HeaderRegisterComponent,
    HeaderDashboardComponent,
    HeaderBenefitsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports:[
    HeaderRegisterComponent,
    HeaderDashboardComponent,
    HeaderBenefitsComponent
  ]
})
export class LayoutsModule { }
