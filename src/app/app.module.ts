import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocpatientsComponent } from './Doctor/docpatients/docpatients.component';
import { DoctordashboardComponent } from './Doctor/doctordashboard/doctordashboard.component';
import { DocvaccinesComponent } from './Doctor/docvaccines/docvaccines.component';
import { PatientaboutdocComponent } from './Patient/patientaboutdoc/patientaboutdoc.component';
import { PatientaboutdocspecialistsComponent } from './Patient/patientaboutdocspecialists/patientaboutdocspecialists.component';
import { PatientchannelingComponent } from './Patient/patientchanneling/patientchanneling.component';
import { PatientdashboardComponent } from './Patient/patientdashboard/patientdashboard.component';
import { PatientvaccineComponent } from './Patient/patientvaccine/patientvaccine.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { DoctorprofileComponent } from './Admin/doctorprofile/doctorprofile.component';
import { RegisterdoctorComponent } from './Admin/registerdoctor/registerdoctor.component';
import { RegisterpatientComponent } from './Admin/registerpatient/registerpatient.component';
import { ReportsComponent } from './Admin/reports/reports.component';
import { ScheduleappointmentsComponent } from './Admin/scheduleappointments/scheduleappointments.component';
import { ScheduleappointmentsviewComponent } from './Admin/scheduleappointmentsview/scheduleappointmentsview.component';
import { ViewpatientsComponent } from './Admin/viewpatients/viewpatients.component';
import { RegisterhospitalComponent } from './SuperAdmin/registerhospital/registerhospital.component';
import { ReportComponent } from './SuperAdmin/report/report.component';
import { ScheduleappointmentComponent } from './SuperAdmin/scheduleappointment/scheduleappointment.component';
import { ScheduleappointmentviewComponent } from './SuperAdmin/scheduleappointmentview/scheduleappointmentview.component';
import { ViewhospitalsComponent } from './SuperAdmin/viewhospitals/viewhospitals.component';
import { ViewpatientComponent } from './SuperAdmin/viewpatient/viewpatient.component';
import { AboutComponent } from './about/about.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { RegisterHospitalComponent } from './register-hospital/register-hospital.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DocpatientsComponent,
    DoctordashboardComponent,
    DocvaccinesComponent,
    PatientaboutdocComponent,
    PatientaboutdocspecialistsComponent,
    PatientchannelingComponent,
    PatientdashboardComponent,
    PatientvaccineComponent,
    DashboardComponent,
    DoctorprofileComponent,
    RegisterdoctorComponent,
    RegisterpatientComponent,
    ReportsComponent,
    ScheduleappointmentsComponent,
    ScheduleappointmentsviewComponent,
    ViewpatientsComponent,
    RegisterhospitalComponent,
    ReportComponent,
    ScheduleappointmentComponent,
    ScheduleappointmentviewComponent,
    ViewhospitalsComponent,
    ViewpatientComponent,
    AboutComponent,
    FrontpageComponent,
    LoginComponent,
    RegisterDoctorComponent,
    RegisterHospitalComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
