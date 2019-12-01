import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableformsComponent } from './tableforms.component';

describe('TableformsComponent', () => {
  let component: TableformsComponent;
  let fixture: ComponentFixture<TableformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
