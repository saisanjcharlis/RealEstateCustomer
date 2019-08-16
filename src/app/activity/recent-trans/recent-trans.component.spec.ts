import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTransComponent } from './recent-trans.component';

describe('RecentTransComponent', () => {
  let component: RecentTransComponent;
  let fixture: ComponentFixture<RecentTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
