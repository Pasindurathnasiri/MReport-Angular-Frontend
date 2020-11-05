import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientaboutdocComponent } from './patientaboutdoc.component';

describe('PatientaboutdocComponent', () => {
  let component: PatientaboutdocComponent;
  let fixture: ComponentFixture<PatientaboutdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientaboutdocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientaboutdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
