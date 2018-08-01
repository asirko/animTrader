import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnimsComponent } from './my-anims.component';

describe('UserHomeComponent', () => {
  let component: MyAnimsComponent;
  let fixture: ComponentFixture<MyAnimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAnimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAnimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
