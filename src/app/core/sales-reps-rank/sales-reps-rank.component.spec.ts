import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepsRankComponent } from './sales-reps-rank.component';

describe('SalesRepsRankComponent', () => {
  let component: SalesRepsRankComponent;
  let fixture: ComponentFixture<SalesRepsRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesRepsRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRepsRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
