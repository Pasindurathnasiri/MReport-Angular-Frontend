import { Injectable } from '@angular/core';
import { Hospital } from '../shared/hospital.model';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  getAllHospitals(){
    return this.http.get(environment.apiBaseUrl+'/Hospitals');
  }

  regHospital(hospital:Hospital){
    return this.http.post(environment.apiBaseUrl+'/Hospitals',hospital,this.noAuthHeader);
  }
}
