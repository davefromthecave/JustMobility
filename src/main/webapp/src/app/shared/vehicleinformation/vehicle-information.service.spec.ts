import { TestBed } from '@angular/core/testing';

import { VehicleInformationService } from './vehicle-information.service';

describe('VehicleInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleInformationService = TestBed.get(VehicleInformationService);
    expect(service).toBeTruthy();
  });
});
