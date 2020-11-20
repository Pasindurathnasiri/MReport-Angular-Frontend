import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorsidenav',
  templateUrl: './doctorsidenav.component.html',
  styleUrls: ['./doctorsidenav.component.css']
})
export class DoctorsidenavComponent implements OnInit {

  constructor() { }

  public truec = false;

  ngOnInit(): void {
  }

  das(){
    this.truec = true;
  }

}
