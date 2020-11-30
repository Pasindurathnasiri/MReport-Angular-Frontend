import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../shared/hospital.service';

@Component({
  selector: 'app-viewhospitals',
  templateUrl: './viewhospitals.component.html',
  styleUrls: ['./viewhospitals.component.css']
})
export class ViewhospitalsComponent implements OnInit {

  allHospitals:any =[];

  constructor(private hospitalService:HospitalService) {
    this.hospitalService.getAllHospitals().subscribe(data=>{
      this.allHospitals=data;
      console.log(this.allHospitals);
    })
   }

  ngOnInit(): void {
  }

}
