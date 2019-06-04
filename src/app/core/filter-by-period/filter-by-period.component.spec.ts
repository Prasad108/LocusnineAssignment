import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByPeriodComponent } from './filter-by-period.component';

describe('FilterByPeriodComponent', () => {
  let component: FilterByPeriodComponent;
  let fixture: ComponentFixture<FilterByPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
