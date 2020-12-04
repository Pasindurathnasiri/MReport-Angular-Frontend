import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../shared/hospital.service';
import {FormControl, FormBuilder, FormGroup ,Validators, NgForm} from '@angular/forms';



@Component({
  selector: 'app-registerhospital',
  templateUrl: './registerhospital.component.html',
  styleUrls: ['./registerhospital.component.css']
})
export class SARegisterhospitalComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;
  public readonly newHospitalFormGroup:FormGroup;

  constructor(private hospitalService:HospitalService,private formBuilder:FormBuilder) { 

    this.newHospitalFormGroup= this.formBuilder.group({
      hosRegNo: [],
      hospitalName: [],
      address: [],
      district: [],
      ownerNIC: [],
      email: [],
      telephone: [],
      password: [],
      ownerName:[],
      ownerMobile:[]
     })

  }

  ngOnInit(): void {
  }

  onRegHospital(){
    this.hospitalService.regHospital(this.newHospitalFormGroup.value).subscribe(res=>{
      
      console.log(res)
      },err=>{
      if(err){
        console.log("Registration Faild"+err);
      }else{
        this.serverErrorMessages = 'Something went Wrong';

      }

    });
    window.alert("Hospital Registrarion Successful..!");
   // location.reload();
  }

}
