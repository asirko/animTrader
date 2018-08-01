import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnimComponent } from './new-anim.component';

describe('NewAnimComponent', () => {
  let component: NewAnimComponent;
  let fixture: ComponentFixture<NewAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
