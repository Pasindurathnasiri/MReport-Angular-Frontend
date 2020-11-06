import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {FrontpageComponent} from '../app/frontpage/frontpage.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './Admin/dashboard/dashboard.component'

const routes: Routes = [
  {path:'',component:FrontpageComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
