import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedsearchComponent } from './savedsearch.component';

describe('SavedsearchComponent', () => {
  let component: SavedsearchComponent;
  let fixture: ComponentFixture<SavedsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
