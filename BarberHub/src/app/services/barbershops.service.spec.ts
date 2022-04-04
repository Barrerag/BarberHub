import { TestBed } from '@angular/core/testing';

import { BarbershopsService } from './barbershops.service';

describe('BarbershopsService', () => {
  let service: BarbershopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarbershopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
