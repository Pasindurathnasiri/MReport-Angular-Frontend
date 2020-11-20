import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctorsidenav',
  templateUrl: './doctorsidenav.component.html',
  styleUrls: ['./doctorsidenav.component.css']
})
export class DoctorsidenavComponent implements OnInit {

  constructor(private doctorservice : DoctorService) { }

  public truec = false;

  ngOnInit(): void {
  }

  getDoctor_Details()
  {
    this.doctorservice.getDoctorData().subscribe( data =>
      console.warn(data));
  }

  das(){
    this.truec = true;
  }

}
