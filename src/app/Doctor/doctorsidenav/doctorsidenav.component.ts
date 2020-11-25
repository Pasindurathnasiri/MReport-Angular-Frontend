import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctorsidenav',
  templateUrl: './doctorsidenav.component.html',
  styleUrls: ['./doctorsidenav.component.css']
})
export class DoctorsidenavComponent implements OnInit {

  constructor(private doctorservice : DoctorService) {
    
    this.doctorservice.getDoctorData().subscribe( data =>
      console.log(data));

   }

  public truec = false;

  ngOnInit(): void {
    
  }

  public getDoctor_Details()
  {
    
  }
  

  das(){
    this.truec = true;
  }

}
