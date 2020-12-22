import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocapointmentComponent } from './docapointment.component';

describe('DocapointmentComponent', () => {
  let component: DocapointmentComponent;
  let fixture: ComponentFixture<DocapointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocapointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocapointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
