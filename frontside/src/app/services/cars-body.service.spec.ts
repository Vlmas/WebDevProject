import { TestBed } from '@angular/core/testing';

import { CarsBodyService } from './cars-body.service';

describe('CarsBodyService', () => {
  let service: CarsBodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsBodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
