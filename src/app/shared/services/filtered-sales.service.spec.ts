import { TestBed } from '@angular/core/testing';

import { FilteredSalesService } from './filtered-sales.service';

describe('FilteredSalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilteredSalesService = TestBed.get(FilteredSalesService);
    expect(service).toBeTruthy();
  });
});
