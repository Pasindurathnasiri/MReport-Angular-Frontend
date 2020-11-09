import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {FrontpageComponent} from '../app/frontpage/frontpage.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './Admin/dashboard/dashboard.component'
import { DoctorprofileComponent } from './Admin/doctorprofile/doctorprofile.component';
import { RegisterdoctorComponent } from './Admin/registerdoctor/registerdoctor.component';
import { RegisterpatientComponent } from './Admin/registerpatient/registerpatient.component';
import { ScheduleappointmentsComponent } from './Admin/scheduleappointments/scheduleappointments.component';
import { ScheduleappointmentsviewComponent } from './Admin/scheduleappointmentsview/scheduleappointmentsview.component';
import { ViewpatientsComponent } from './Admin/viewpatients/viewpatients.component';
import { Admissionpatient } from './Admin/admissionpatient/admissionpatient.component';

const routes: Routes = [
  {path:'',component:FrontpageComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'doctorprofile', component:DoctorprofileComponent},
  {path:'regdoctor', component:RegisterdoctorComponent},
  {path:'regpatient',component:RegisterpatientComponent},
  {path:'scheduleapp', component:ScheduleappointmentsComponent},
  {path:'scheduleappview', component:ScheduleappointmentsviewComponent},
  {path:'viewpatient', component:ViewpatientsComponent},
  {path:'admission', component:Admissionpatient}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
