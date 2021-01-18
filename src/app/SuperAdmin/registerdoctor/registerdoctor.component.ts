import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import {DoctorService} from '../../shared/doctor.service';
import {FormControl, FormBuilder, FormGroup ,Validators, NgForm} from '@angular/forms';



@Component({
  selector: 'app-registerdoctor',
  templateUrl: './registerdoctor.component.html',
  styleUrls: ['./registerdoctor.component.css']
})
export class SARegisterdoctorComponent implements OnInit {

  imageUrl : string ="../../../assets/upload.png";
  fileToUpload : File = null;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  @Output() public onUploadFinished = new EventEmitter();

  public progress: number;
  public message: string;

  public readonly docGroup:FormGroup;
  
  AllDoctors: any =[];

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
      mobile: []
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
      this.imgUpload(files)
    });

    
    window.alert("Doctor Details Registered Successfully..!");
    //location.reload();
  }

  //upload image
  public imgUpload = (files)=>{
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:44373/api/Upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  } 

  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);

    //show image review
    var reader = new FileReader();
    reader.onload = (event:any) =>{
      this.imageUrl = event.target.result;
    }

    reader.readAsDataURL(this.fileToUpload);

  }

}
