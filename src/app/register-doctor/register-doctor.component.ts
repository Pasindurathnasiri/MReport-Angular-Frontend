import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../shared/doctor.service';
import {HttpClient ,HttpResponse} from '@angular/common/http';
import {FormControl, FormBuilder, FormGroup ,Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  public readonly docGroup:FormGroup;
  
  AllDoctors: any =[];
  private docUrl = 'https://localhost:44373/api/Doctors';
  


  constructor(private doctorService:DoctorService,private http:HttpClient,private formBuilder: FormBuilder) { 
    console.log("hi");
   this.doctorService.getAllDoctors().subscribe(data=>{
     console.log(data);
   })

   this.docGroup = this.formBuilder.group({
    medRegNo: [],
    firstName: [],
    dob: [Date],
    lastName: [],
    gender: [],
    maritalState: [],
    address: [],
    spArea: [],
    nic: [],
    email: [],
    title: [],
    password: [],
    mobile: []
   })
    
  }

  ngOnInit(): void {
  }

  registerDoctor(){
    this.doctorService.regDoctor(this.docGroup.value).subscribe(res=>{
      console.log(res);
    },
    err=>{
      if(err){
        console.log("Registration Faild"+err);
      }else{
        this.serverErrorMessages = 'Something went Wrong';
        location.reload();
        window.alert("Doctor Details Registered Successfully..!")
      }
    });
    
  }

}
