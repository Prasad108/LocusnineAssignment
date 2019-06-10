import { TestBed } from '@angular/core/testing';

import { DistinctVerticalsService } from './distinct-verticals.service';

describe('DistinctVerticalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistinctVerticalsService = TestBed.get(DistinctVerticalsService);
    expect(service).toBeTruthy();
  });
});
