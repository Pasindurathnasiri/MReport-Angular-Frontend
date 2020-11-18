import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../shared/doctor.service';
import {HttpClient ,HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {

  AllDoctors: any =[];
  private docUrl = 'https://localhost:44373/api/Doctors';
  


  constructor(private doctorService:DoctorService,private http:HttpClient) { 
    console.log("hi");
   this.doctorService.getAllDoctors().subscribe(data=>{
     console.log(data);
   })
    
  }

  ngOnInit(): void {
  }

  getAllDoctors(){
    return this.http.get(this.docUrl).pipe(
      map((res:any)=>{
        res.json();
      })
    )
  }

  getDocData(){
    this.getAllDoctors().subscribe(data=>{
    //  console.log(data);
    })
  }

}
