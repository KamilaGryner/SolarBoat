import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAlgogorythmOverviewComponent } from './control-algogorythm-overview.component';

describe('ControlAlgogorythmOverviewComponent', () => {
  let component: ControlAlgogorythmOverviewComponent;
  let fixture: ComponentFixture<ControlAlgogorythmOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlAlgogorythmOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAlgogorythmOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
