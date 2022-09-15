import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard-module/dashboard.module';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./modules/auth-module/auth.module').then(m => m.AuthModule)
      },
      {
        path:'dashboard',
       loadChildren:() => import('./modules/dashboard-module/dashboard.module').then(m=>m.DashboardModule)
      },
      {
        path:'',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'auth',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
