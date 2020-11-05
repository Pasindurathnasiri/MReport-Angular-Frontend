import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientaboutdocspecialistsComponent } from './patientaboutdocspecialists.component';

describe('PatientaboutdocspecialistsComponent', () => {
  let component: PatientaboutdocspecialistsComponent;
  let fixture: ComponentFixture<PatientaboutdocspecialistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientaboutdocspecialistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientaboutdocspecialistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
