import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocpatientsComponent } from './docpatients.component';

describe('DocpatientsComponent', () => {
  let component: DocpatientsComponent;
  let fixture: ComponentFixture<DocpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocpatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
