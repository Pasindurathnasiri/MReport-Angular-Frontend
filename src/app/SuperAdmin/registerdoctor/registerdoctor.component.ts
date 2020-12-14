import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../shared/doctor.service';
import {FormControl, FormBuilder, FormGroup ,Validators, NgForm} from '@angular/forms';


@Component({
  selector: 'app-registerdoctor',
  templateUrl: './registerdoctor.component.html',
  styleUrls: ['./registerdoctor.component.css']
})
export class SARegisterdoctorComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  public readonly docGroup:FormGroup;
  
  AllDoctors: any =[];

  constructor(private doctorService:DoctorService,private formBuilder: FormBuilder) {

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

  onRegDoctor(){
    this.doctorService.regDoctor(this.docGroup.value).subscribe(res=>{
      console.log(res);
    },
    err=>{
      if(err){
        console.log("Registration Faild"+err);
      }else{
        this.serverErrorMessages = 'Something went Wrong';
        
        
      }
    });
    window.alert("Doctor Details Registered Successfully..!");
    location.reload();
  }

}
