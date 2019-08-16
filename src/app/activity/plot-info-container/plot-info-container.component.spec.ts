import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotInfoContainerComponent } from './plot-info-container.component';

describe('PlotInfoContainerComponent', () => {
  let component: PlotInfoContainerComponent;
  let fixture: ComponentFixture<PlotInfoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotInfoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
