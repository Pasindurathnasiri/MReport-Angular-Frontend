import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { DoctorService } from '../doctor.service'

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

}
