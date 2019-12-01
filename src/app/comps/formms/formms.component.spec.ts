import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmsComponent } from './formms.component';

describe('FormmsComponent', () => {
  let component: FormmsComponent;
  let fixture: ComponentFixture<FormmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
