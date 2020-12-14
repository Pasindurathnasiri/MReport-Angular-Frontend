import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-viewpatients',
  templateUrl: './viewpatients.component.html',
  styleUrls: ['./viewpatients.component.css']
})
export class ViewpatientsComponent implements OnInit {

  allPatients:any =[];
  term: string;

  constructor(private patientService:PatientService) {

   this.patientService.getAllPatient().subscribe(data=>{
     this.allPatients=data;
     console.log(this.allPatients);
   })

  }

  ngOnInit(): void {
  }

}
