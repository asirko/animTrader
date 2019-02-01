import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalExtremumSliderComponent } from './vertical-extremum-slider.component';

describe('VerticalExtremumSliderComponent', () => {
  let component: VerticalExtremumSliderComponent;
  let fixture: ComponentFixture<VerticalExtremumSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalExtremumSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalExtremumSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
