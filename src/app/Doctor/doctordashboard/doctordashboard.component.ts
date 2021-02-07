import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import {DoctorService} from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})

export class DoctordashboardComponent implements OnInit {

  public doctordetail: any = {};

  constructor(private doctorservice : DoctorService) {
    
    this.doctorservice.getAllDoctors().subscribe( data =>{
      console.log(data);
      this.doctordetail = data;
      // console.log(this.doctordetail);
    });

   }

  ngOnInit(): void {
  }

  onDelete(d){
    console.log(d.id);
    if(window.confirm('Are you sure you want to delete this Doctor?')){
      const data = this.doctordetail.data;
      this.doctorservice.deleteDoctor(d.id).subscribe();
    }
    window.alert("Doctor Deleted Successfully..!");
    location.reload();
  }

  

}
