import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import {DoctorService} from '../../shared/doctor.service';
import {FormControl, FormBuilder, FormGroup ,Validators, NgForm} from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';



@Component({
  selector: 'app-registerdoctor',
  templateUrl: './registerdoctor.component.html',
  styleUrls: ['./registerdoctor.component.css']
})
export class SARegisterdoctorComponent implements OnInit {

  imageUrl : string ="../../../assets/upload.png";
  imgUrl : string;
  fileToUpload : File = null;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  @Output() public onUploadFinished = new EventEmitter();

  public progress: number;
  public message: string;

  public readonly docGroup:FormGroup;
  
  AllDoctors: any =[];
  naturalHeight: number;
  naturalWidth: number;

  constructor(private doctorService:DoctorService,private formBuilder: FormBuilder,private http: HttpClient) {

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
      mobile: [],
      imgPath:[]
     })

   }

  ngOnInit(): void {
  }

  onRegDoctor(files){
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

  //upload image
 

  handleFileInput(file: FileList){
    
    
    this.fileToUpload = file.item(0);

    //show image review
    var reader = new FileReader();
    reader.onload = (event:any) =>{
      this.imageUrl = event.target.result;
    }
    
    reader.readAsDataURL(this.fileToUpload);
    this.convertToBase64(this.fileToUpload);
    
  }

  convertToBase64(file:File){
    const observable = new Observable((subscriber:Subscriber<any>)=>{
    this.readFile(file,subscriber)
    });
    observable.subscribe((d)=>{
      console.log(d);
      this.docGroup.value.imgPath=d;
      
    })
  }

  readFile(file:File,subscriber:Subscriber<any>){
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload =()=>{
      subscriber.next(filereader.result);
      subscriber.complete();
    }

    filereader.onerror = (error)=>{
      subscriber.error(error);
      subscriber.complete();
    }

  }

}
