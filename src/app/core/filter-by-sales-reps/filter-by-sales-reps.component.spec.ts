import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBySalesRepsComponent } from './filter-by-sales-reps.component';

describe('FilterBySalesRepsComponent', () => {
  let component: FilterBySalesRepsComponent;
  let fixture: ComponentFixture<FilterBySalesRepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBySalesRepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBySalesRepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
