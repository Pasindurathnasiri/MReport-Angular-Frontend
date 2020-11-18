import { Injectable } from '@angular/core';
import {Doctor} from './doctor.model'
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private docUrl = 'https://localhost:44373/api/Doctors';

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  getAllDoctors(){
    return this.http.get(environment.apiBaseUrl+'/Doctors');
  }

  regDoctor(doctor:Doctor){
    return this.http.post(environment.apiBaseUrl+'/Doctors',doctor,this.noAuthHeader);
  }
}
