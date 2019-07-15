import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiDateComponent } from './emi-date.component';

describe('EmiDateComponent', () => {
  let component: EmiDateComponent;
  let fixture: ComponentFixture<EmiDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
