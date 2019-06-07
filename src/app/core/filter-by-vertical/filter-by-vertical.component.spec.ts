import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByVerticalComponent } from './filter-by-vertical.component';

describe('FilterByVerticalComponent', () => {
  let component: FilterByVerticalComponent;
  let fixture: ComponentFixture<FilterByVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
