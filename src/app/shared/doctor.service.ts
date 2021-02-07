import { Injectable } from '@angular/core';
import {Doctor} from './doctor.model'
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map,catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  getAllDoctors(){
    return this.http.get(environment.apiBaseUrl+'/Doctors');
  }

  regDoctor(doctor:Doctor){
    return this.http.post(environment.apiBaseUrl+'/Doctors',doctor,this.noAuthHeader);
  }

  deleteDoctor(id):Observable<any>{
    var API_URL=`${environment.apiBaseUrl}/Doctors/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.errorMgmt))
  }
/*
  DeleteTransaction(id):Observable<any>{
    var API_URL=`${this.endpoint}/delete-transaction/${id}`;
    return this.http.delete(API_URL)
    .pipe(
      catchError(this.errorMgmt)
    )
  }*/

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

