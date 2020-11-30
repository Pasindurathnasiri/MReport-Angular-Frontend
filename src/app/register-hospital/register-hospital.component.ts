import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../shared/hospital.service';
import {HttpClient ,HttpResponse} from '@angular/common/http';
import {FormControl, FormBuilder, FormGroup ,Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-hospital',
  templateUrl: './register-hospital.component.html',
  styleUrls: ['./register-hospital.component.css']
})
export class RegisterHospitalComponent implements OnInit {
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

  registerHospital(){
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
