import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontpageComponent} from '../app/frontpage/frontpage.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path:'',component:FrontpageComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
