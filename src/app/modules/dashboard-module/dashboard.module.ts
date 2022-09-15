import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { LayoutsModule } from '../layouts-module/layouts.module';
import { CoreModule } from '../core-module/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    BenefitsComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    CoreModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
