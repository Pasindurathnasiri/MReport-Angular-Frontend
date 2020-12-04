import { Component, OnInit } from '@angular/core';
import {DoctorService} from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  D_login : any = {};

  constructor(
    private doctorservice : DoctorService,) {

   }

  ngOnInit(): void {
    this.doctorservice.getAllDoctors().subscribe(data =>{
      console.log(data);
      this.D_login = data;
      
    });
  }

}
