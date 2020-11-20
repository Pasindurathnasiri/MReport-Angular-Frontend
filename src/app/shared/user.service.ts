import { Injectable } from '@angular/core';
import {User} from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) {}

  addPatient(patient:User){
    return this.http.post(environment.apiBaseUrl+'/Patients',patient,this.noAuthHeader)
  }
}
