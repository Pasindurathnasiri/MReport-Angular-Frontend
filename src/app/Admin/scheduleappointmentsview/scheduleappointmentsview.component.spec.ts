import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleappointmentsviewComponent } from './scheduleappointmentsview.component';

describe('ScheduleappointmentsviewComponent', () => {
  let component: ScheduleappointmentsviewComponent;
  let fixture: ComponentFixture<ScheduleappointmentsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleappointmentsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleappointmentsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
