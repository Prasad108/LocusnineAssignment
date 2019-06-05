import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDetailsTableComponent } from './sale-details-table.component';

describe('SaleDetailsTableComponent', () => {
  let component: SaleDetailsTableComponent;
  let fixture: ComponentFixture<SaleDetailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleDetailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
