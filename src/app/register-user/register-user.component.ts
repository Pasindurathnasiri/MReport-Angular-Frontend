import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup ,Validators, NgForm} from '@angular/forms';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  showSucessMessage: boolean;
  serverErrorMessages: string;

  public readonly patientFormGroup:FormGroup;

  constructor(private formBuilder: FormBuilder,private patientService:PatientService) {

    this.patientFormGroup = this.formBuilder.group({
      patientRegNo:[],
      firstName: [],
      lastName: [],
      dob: [Date],
      nic: [],
      mobile: [],
      password: [],
      email: [],
      address: [],
      maritalStatus: [],
      gender: [],
      gaurdianType: [],
      gaurdianName: [],
      gaurdianMobile: [],
      gaurdianEmail: [],
      district: [],
      bloodGroup: [],
      condition: []
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.patientService.regPatient(this.patientFormGroup.value).subscribe(
      res =>{
        this.showSucessMessage = true;
        console.log(res);
      },
      err => {
        if(err){
          console.log("Registration Faild"+err);
        }else{
          this.serverErrorMessages = 'Something went Wrong';
        }
      }
    );
    window.alert("Patient Added Successfully");
    location.reload();
  }

}
