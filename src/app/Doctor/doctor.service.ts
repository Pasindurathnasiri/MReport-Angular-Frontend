import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private Http : HttpClient) { }

  getDoctorData(){
    let url = "https://localhost:44340/api/Doctors";
    // let url = "https://weatherbit-v1-mashape.p.rapidapi.com/current";
    return this.Http.get(url);
  }
}
