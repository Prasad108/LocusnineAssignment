import { TestBed } from '@angular/core/testing';

import { SaleDetailsService } from './sale-details.service';

describe('SaleDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleDetailsService = TestBed.get(SaleDetailsService);
    expect(service).toBeTruthy();
  });
});
