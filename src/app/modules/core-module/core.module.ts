import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module/material.module';
import { LayoutsModule } from '../layouts-module/layouts.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';





@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
  ],
  exports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
  ],
})
export class CoreModule { }
