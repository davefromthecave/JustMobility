import { TestBed } from '@angular/core/testing';

import { RideMetaInformationService } from './ride-meta-information.service';

describe('RideMetaInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RideMetaInformationService = TestBed.get(RideMetaInformationService);
    expect(service).toBeTruthy();
  });
});
