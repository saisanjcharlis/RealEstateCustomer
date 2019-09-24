import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViceroyceComponent } from './viceroyce.component';

describe('ViceroyceComponent', () => {
  let component: ViceroyceComponent;
  let fixture: ComponentFixture<ViceroyceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViceroyceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViceroyceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
