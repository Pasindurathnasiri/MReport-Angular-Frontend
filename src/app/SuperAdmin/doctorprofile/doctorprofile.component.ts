import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../shared/doctor.service';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class SADoctorprofileComponent implements OnInit {

  public term:string;

  allDoctors:any=[];



  constructor(private doctorService:DoctorService) { 
    this.doctorService.getAllDoctors().subscribe(data=>{
      this.allDoctors=data;
      console.log(this.allDoctors)
    })

  }

  ngOnInit(): void {
  }

}
