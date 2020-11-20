import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsidenavComponent } from './doctorsidenav.component';

describe('DoctorsidenavComponent', () => {
  let component: DoctorsidenavComponent;
  let fixture: ComponentFixture<DoctorsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
