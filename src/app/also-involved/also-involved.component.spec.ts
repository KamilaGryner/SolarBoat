import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsoInvolvedComponent } from './also-involved.component';

describe('AlsoInvolvedComponent', () => {
  let component: AlsoInvolvedComponent;
  let fixture: ComponentFixture<AlsoInvolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsoInvolvedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsoInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
