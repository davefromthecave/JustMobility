import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootprintViewComponent } from './footprint-view.component';

describe('FootprintViewComponent', () => {
  let component: FootprintViewComponent;
  let fixture: ComponentFixture<FootprintViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootprintViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootprintViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
