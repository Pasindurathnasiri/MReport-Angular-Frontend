import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patient.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-docpatients',
  templateUrl: './docpatients.component.html',
  styleUrls: ['./docpatients.component.css']
})
export class DocpatientsComponent implements OnInit {

  patient_details : any = {};

  constructor(
    private p_service : PatientService,
    private router : Router
    ) {

    this.p_service.getAllPatient().subscribe(data =>{
      console.log(data);
      this.patient_details = data;
    })
   }

  ngOnInit(): void {
  }

  regpatient(){
    this.router.navigate(['/sa-registerpatient']);
  }

}
