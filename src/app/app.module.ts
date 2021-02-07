import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpHandler } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule ,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {matMenuAnimations, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

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
import { SARegisterhospitalComponent } from './SuperAdmin/registerhospital/registerhospital.component';
import { SAReportComponent } from './SuperAdmin/report/report.component';
import {SADoctorprofileComponent} from './SuperAdmin/doctorprofile/doctorprofile.component'
import {SARegisterdoctorComponent} from './SuperAdmin/registerdoctor/registerdoctor.component';
import { SARegisterpatientComponent} from './SuperAdmin/registerpatient/registerpatient.component'
import { SAScheduleappointmentComponent } from './SuperAdmin/scheduleappointment/scheduleappointment.component';
import { SAScheduleappointmentviewComponent } from './SuperAdmin/scheduleappointmentview/scheduleappointmentview.component';
import { ViewhospitalsComponent } from './SuperAdmin/viewhospitals/viewhospitals.component';
import { ViewpatientComponent } from './SuperAdmin/viewpatient/viewpatient.component';
import { AboutComponent } from './about/about.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { RegisterHospitalComponent } from './register-hospital/register-hospital.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DoctorsidenavComponent } from './Doctor/doctorsidenav/doctorsidenav.component';
import { SaDashboardComponent } from './SuperAdmin/sa-dashboard/sa-dashboard.component';
import { Admissionpatient } from './Admin/admissionpatient/admissionpatient.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdatedoctorComponent } from './Doctor/updatedoctor/updatedoctor.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,

    
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
    SARegisterhospitalComponent,
    SAReportComponent,
    SAScheduleappointmentComponent,
    SAScheduleappointmentviewComponent,
    ViewhospitalsComponent,
    ViewpatientComponent,
    AboutComponent,
    FrontpageComponent,
    LoginComponent,
    RegisterDoctorComponent,
    RegisterHospitalComponent,
    RegisterUserComponent,
    Admissionpatient,
    SaDashboardComponent,
    SARegisterpatientComponent,
    SARegisterdoctorComponent,
    SADoctorprofileComponent,
    DoctorsidenavComponent,
    FooterComponent,
    UpdatedoctorComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatBottomSheetModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
  ],
  exports:[MatBottomSheetModule],
  providers: [{ provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    { provide: MatBottomSheetRef, useValue: {} }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
