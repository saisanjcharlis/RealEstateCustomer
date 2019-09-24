import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondJewelComponent } from './diamond-jewel.component';

describe('DiamondJewelComponent', () => {
  let component: DiamondJewelComponent;
  let fixture: ComponentFixture<DiamondJewelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamondJewelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondJewelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
