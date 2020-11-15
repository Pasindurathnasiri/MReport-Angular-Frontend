import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {matMenuAnimations, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { DoctorsidenavComponent } from './Doctor/doctorsidenav/doctorsidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    DoctorsidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
