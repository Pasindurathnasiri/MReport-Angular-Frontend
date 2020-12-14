import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../shared/patient.service';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent implements OnInit {

  public term: string;

  allPatients:any =[];

  constructor(private patientService:PatientService) {

   this.patientService.getAllPatient().subscribe(data=>{
     this.allPatients=data;
     console.log(this.allPatients);
   })

  }

  ngOnInit(): void {
  }

}
