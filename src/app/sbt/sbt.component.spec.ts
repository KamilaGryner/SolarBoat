import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbtComponent } from './sbt.component';

describe('SbtComponent', () => {
  let component: SbtComponent;
  let fixture: ComponentFixture<SbtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
