import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimListComponent } from './anim-list.component';

describe('AnimListComponent', () => {
  let component: AnimListComponent;
  let fixture: ComponentFixture<AnimListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
