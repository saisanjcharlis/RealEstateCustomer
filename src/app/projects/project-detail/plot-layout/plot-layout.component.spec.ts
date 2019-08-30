import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotLayoutComponent } from './plot-layout.component';

describe('PlotLayoutComponent', () => {
  let component: PlotLayoutComponent;
  let fixture: ComponentFixture<PlotLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
