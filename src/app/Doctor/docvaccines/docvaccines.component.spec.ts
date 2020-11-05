import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocvaccinesComponent } from './docvaccines.component';

describe('DocvaccinesComponent', () => {
  let component: DocvaccinesComponent;
  let fixture: ComponentFixture<DocvaccinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocvaccinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocvaccinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
