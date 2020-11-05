import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientvaccineComponent } from './patientvaccine.component';

describe('PatientvaccineComponent', () => {
  let component: PatientvaccineComponent;
  let fixture: ComponentFixture<PatientvaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientvaccineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientvaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
