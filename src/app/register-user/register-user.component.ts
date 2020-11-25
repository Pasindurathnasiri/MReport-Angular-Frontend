import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup ,Validators, NgForm} from '@angular/forms';
import {UserService} from '../shared/user.service'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  showSucessMessage: boolean;
  serverErrorMessages: string;

  public readonly patientFormGroup:FormGroup;

  constructor(private formBuilder: FormBuilder,private patientService:UserService) {

    this.patientFormGroup = this.formBuilder.group({
      patientRegNo:[],
      firstName: [],
      lastName: [],
      gender:[],
      maritalSt:[],
      address:[],
      district:[],
      nic:[],
      email: [], 
      password: [],
      mobile:[],
      bloodGroup:[],
      gType:[],
      gName:[],
      gMobile:[],
      gEmail:[],
      gAddress:[]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.patientFormGroup);
    this.patientService.addPatient(this.patientFormGroup.value).subscribe(
      res =>{
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage =false,4000);
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
  }

}
