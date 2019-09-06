import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAllotComponent } from './success-allot.component';

describe('SuccessAllotComponent', () => {
  let component: SuccessAllotComponent;
  let fixture: ComponentFixture<SuccessAllotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessAllotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAllotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
