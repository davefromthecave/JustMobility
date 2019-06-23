import { TestBed } from '@angular/core/testing';

import { KiltServiceService } from './kilt-service.service';

describe('KiltServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KiltServiceService = TestBed.get(KiltServiceService);
    expect(service).toBeTruthy();
  });
});
