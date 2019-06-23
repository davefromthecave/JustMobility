import { TestBed } from '@angular/core/testing';

import { RideInformationService } from './ride-information.service';

describe('RideInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RideInformationService = TestBed.get(RideInformationService);
    expect(service).toBeTruthy();
  });
});
