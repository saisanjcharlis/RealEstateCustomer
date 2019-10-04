import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropDetailComponent } from './prop-detail.component';

describe('PropDetailComponent', () => {
  let component: PropDetailComponent;
  let fixture: ComponentFixture<PropDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
