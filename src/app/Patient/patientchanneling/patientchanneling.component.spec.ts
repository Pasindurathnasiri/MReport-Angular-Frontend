import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientchannelingComponent } from './patientchanneling.component';

describe('PatientchannelingComponent', () => {
  let component: PatientchannelingComponent;
  let fixture: ComponentFixture<PatientchannelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientchannelingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientchannelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
