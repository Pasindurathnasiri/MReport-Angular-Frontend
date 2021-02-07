import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import {DoctorService} from 'src/app/shared/doctor.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {UpdatedoctorComponent} from '../updatedoctor/updatedoctor.component'

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})

export class DoctordashboardComponent implements OnInit {

  public doctordetail: any = {};

  constructor(private doctorservice : DoctorService,private _bottomSheet:MatBottomSheet,private _bottomSheetRef:MatBottomSheetRef) {
    
    this.doctorservice.getAllDoctors().subscribe( data =>{
      console.log(data);
      this.doctordetail = data;
      // console.log(this.doctordetail);
    });

   }

  ngOnInit(): void {
  }

  onDelete(d){
    console.log(d.id);
    if(window.confirm('Are you sure you want to delete this Doctor?')){
      const data = this.doctordetail.data;
      this.doctorservice.deleteDoctor(d.id).subscribe();
    }
    window.alert("Doctor Deleted Successfully..!");
    location.reload();
  }

  onUpdate(d){
    this._bottomSheet.open(UpdatedoctorComponent,{panelClass:'custom-width',data:d})

  }

  // updateEquipment(index :number,e){
  //   this._bottomSheet.open(UpdateEquipmentComponent,{panelClass:'custom-width',data:e})
  
  // }
  
  

}
