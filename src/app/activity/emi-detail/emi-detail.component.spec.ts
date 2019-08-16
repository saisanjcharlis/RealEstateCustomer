import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiDetailComponent } from './emi-detail.component';

describe('EmiDetailComponent', () => {
  let component: EmiDetailComponent;
  let fixture: ComponentFixture<EmiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
