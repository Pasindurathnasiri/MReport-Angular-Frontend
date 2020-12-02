import { Injectable } from '@angular/core';
import {Patient} from '../shared/patient.model';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { env } from 'process';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };


  constructor(private http: HttpClient) { }

  getAllPatient(){
    return this.http.get(environment.apiBaseUrl+'/Patients');
  }

  regPatient(patient:Patient){
    console.log(patient);
    return this.http.post(environment.apiBaseUrl+'/Patients',patient,this.noAuthHeader);
  }
}
