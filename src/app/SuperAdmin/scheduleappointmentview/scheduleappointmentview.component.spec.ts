import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleappointmentviewComponent } from './scheduleappointmentview.component';

describe('ScheduleappointmentviewComponent', () => {
  let component: ScheduleappointmentviewComponent;
  let fixture: ComponentFixture<ScheduleappointmentviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleappointmentviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleappointmentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
